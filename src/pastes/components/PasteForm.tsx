import React, { Suspense } from "react"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function PasteForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="pasteDescription"
        label="Paste Description"
        placeholder="Paste Description"
        type="text"
      />
      <LabeledTextField name="pasteName" label="Paste Name" placeholder="Paste Name" type="text" />
      <LabeledTextField
        name="pasteContent"
        label="Paste Content"
        placeholder="Paste Content"
        type="text"
      />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
