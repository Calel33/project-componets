import { useEffect, useMemo, useState } from 'react'
import {
  BusinessDashboardLayout,
  SplitViewContainer,
  EditPanel,
  PreviewPanel,
  FormTabs,
} from '@/ui/components/business-dashboard'
import { StatusCard } from '@/ui/components/business-dashboard/StatusCard'
import { BusinessCardPreview } from '@/ui/components/business-dashboard/BusinessCardPreview'
import { BasicInfoForm } from '@/ui/components/business-dashboard/forms/BasicInfoForm'
import { HoursForm } from '@/ui/components/business-dashboard/forms/HoursForm'
import { PhotosForm } from '@/ui/components/business-dashboard/forms/PhotosForm'
import { ContactForm } from '@/ui/components/business-dashboard/forms/ContactForm'
import type { BusinessEditData, FileUpload, FormTabType, VersionHistory } from '@/ui/components/types/business-dashboard.types'

function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}

const categories = [
  'Restaurant & Dining',
  'Retail',
  'Services',
  'Health & Wellness',
  'Professional',
]

const initialData: BusinessEditData = {
  id: 'biz_1',
  name: 'The Corner Café',
  category: 'Restaurant & Dining',
  description: 'A cozy neighborhood café serving freshly roasted coffee and homemade pastries.',
  address: '123 Main Street, Downtown',
  tags: ['coffee', 'breakfast', 'wifi', 'outdoor seating'],
  phone: '(555) 123-4567',
  website: 'www.cornercafe.com',
  email: 'hello@cornercafe.com',
  photos: [],
  status: 'open',
  closingTime: '8:00 PM',
}

export default function BusinessDashboardDemo() {
  const [activeTab, setActiveTab] = useState<FormTabType>('basic')
  const [formData, setFormData] = useState<BusinessEditData>(initialData)
  // draft state tracked implicitly via actions; no separate boolean needed
  const [lastSaved, setLastSaved] = useState<Date>(new Date())
  const [version, setVersion] = useState<number>(3)

  const versionHistory: VersionHistory = useMemo(
    () => ({ timestamp: lastSaved.toISOString(), version }),
    [lastSaved, version]
  )

  const debouncedFormData = useDebounce(formData, 300)

  const handleFieldChange = (field: keyof BusinessEditData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleUpload = (files: FileUpload[]) => {
    setFormData((prev) => ({ ...prev, photos: [...prev.photos, ...files] }))
  }

  const onSaveDraft = () => {
    setLastSaved(new Date())
  }

  const onSubmitForApproval = () => {
    setVersion((v) => v + 1)
    setLastSaved(new Date())
  }

  return (
    <BusinessDashboardLayout
      headerRight={
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            Preview Live
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            Save Changes
          </button>
        </div>
      }
    >
      <SplitViewContainer>
        <EditPanel>
          <FormTabs active={activeTab} onChange={setActiveTab} />
          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            className="min-h-0 max-h-full overflow-auto"
          >
            {activeTab === 'basic' && (
              <BasicInfoForm data={formData} categories={categories} onChange={handleFieldChange} />
            )}
            {activeTab === 'hours' && <HoursForm data={formData.hours} />}
            {activeTab === 'photos' && <PhotosForm photos={formData.photos} onUpload={handleUpload} />}
            {activeTab === 'contact' && <ContactForm data={formData} onChange={handleFieldChange} />}

            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-white">
              <div className="text-sm text-slate-600 flex items-center gap-2">
                <span>Last updated: {new Date(versionHistory.timestamp).toLocaleString()}</span>
                <span>•</span>
                <span>Version {versionHistory.version}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  onClick={onSaveDraft}
                >
                  Save Draft
                </button>
                <button
                  className="px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  onClick={onSubmitForApproval}
                >
                  Submit for Approval
                </button>
              </div>
            </div>
          </div>
        </EditPanel>
        <PreviewPanel>
          <div className="p-6 space-y-4">
            <div>
              <div className="text-lg font-semibold">Live Preview</div>
              <div className="text-sm text-slate-600">This is how customers will see your listing</div>
            </div>
            <StatusCard />
            <BusinessCardPreview data={debouncedFormData} />
          </div>
        </PreviewPanel>
      </SplitViewContainer>
    </BusinessDashboardLayout>
  )
}
