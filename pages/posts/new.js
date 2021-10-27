import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'
import { LoginChallenge } from '../../components/LoginForm'
import ErrorList from '../../components/ErrorList'
import {
  InputTitle,
  InputContent,
  InputSlug,
  InputImage,
} from '../../components/FormInputs'
import { createOnePost } from '../../lib/posts'

export default function New() {
  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm()
  const [formError, setFormError] = useState()
  const router = useRouter()

  const onSubmit = data => {
    setFormError()
    data.content = data.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    createOnePost(data)
      .then(() => {
        router.push(`/posts/${data.slug}/edit`)
      })
      .catch(setFormError)
  }

  return (
    <Layout noFooter>
      <LoginChallenge />
      <section className="max-w-prose mx-auto px-2">
        <h1 className="h1">Draft a new post</h1>
        <form
          className="form flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset disabled={isSubmitting}>
            <InputTitle register={register} error={errors.title} />
            <InputSlug register={register} error={errors.slug} />
            <InputContent register={register} />
            <InputImage register={register} error={errors.image} />

            <div className="flex justify-between">
              <button
                type="submit"
                className="button solid"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                Create Post
              </button>
              <Link href="/">
                <a className="button outline">Back to Home</a>
              </Link>
            </div>
          </fieldset>
          <ErrorList summary="Error creating post" error={formError} />
        </form>
      </section>
    </Layout>
  )
}
