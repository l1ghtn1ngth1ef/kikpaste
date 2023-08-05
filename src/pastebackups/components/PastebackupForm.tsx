import React, { Suspense } from "react"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function PastebackupForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="string" label="String" placeholder="String" type="text" />
      <LabeledTextField name="string" label="String" placeholder="String" type="text" />
      <LabeledTextField name="dataName" label="Data Name" placeholder="Data Name" type="text" />
      <LabeledTextField name="dataDesc" label="Data Desc" placeholder="Data Desc" type="text" />
      <LabeledTextField
        name="dataContent"
        label="Data Content"
        placeholder="Data Content"
        type="text"
      />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
