'use client'

import { useRentModal } from '@/app/hooks/useRentModal'
import { useMemo, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Heading from '../Heading'
import Map from '../Map'
import CategoryInput from '../inputs/CategoryInput'
import CountrySelect from '../inputs/CountrySelect'
import { categories } from '../navbar/Categories'
import Modal from './Modal'

interface Props {}

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = (props: Props) => {
  const rentModal = useRentModal()

  const [step, setStep] = useState(STEPS.CATEGORY)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      categories: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  })

  const category = watch('category')
  const location = watch('location')

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return 'Create'
    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) return undefined

    return 'Back'
  }, [step])

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Which of these best describes your place?" subtitle="Pick a category" />
      <div className="grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
        {categories.map((item) => {
          return (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category) => {
                  setCustomValue('category', category)
                }}
                label={item.label}
                icon={item.icon}
                selected={category === item.label}
              />
            </div>
          )
        })}
      </div>
    </div>
  )

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Where is your place located?" subtitle="Help guests find you!" />
        <CountrySelect value={location} onChange={(value) => setCustomValue('location', value)} />
        <Map />
      </div>
    )
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Airbnb your home"
      body={bodyContent}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
    />
  )
}
export default RentModal
