import React, { useState, useRef, useEffect } from 'react'
import { submitComment } from '../services'
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccesMessage, setShowSuccesMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommitSubmittion = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!name || !comment || !email) {
      setError(true)
      return
    }
    const commentsObj = { name, email, comment, slug }
    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('eamil', email)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
    }

    submitComment(commentsObj).then((res) => {
      setShowSuccesMessage(true)
      setTimeout(() => {
        setShowSuccesMessage(false)
      }, 2000)
    })
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Comments</h3>
      <div className='grid grid-cols-1 gap-4 pb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-nonew-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700  h-32 '
          placeholder='Comments'
          name='comment'
        ></textarea>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4'>
        <input
          type='text'
          ref={nameEl}
          className='p-4 outline-nonew-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          name='name'
          placeholder='Name'
        />
        <input
          type='email'
          ref={emailEl}
          className='p-4 outline-nonew-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
          name='email'
          placeholder='Email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 pb-4'>
        <div>
          <input
            type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
            ref={storeDataEl}
          />
          <label
            htmlFor='storeData'
            className='text-gray-500 cursor-pointer ml-3 font-normal'
          >
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className='mt-8'>
        <button
          onClick={handleCommitSubmittion}
          className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-400 text-lg font-medium rounded-full px-8 py-3 cursor-pointer'
        >
          Post Comment
        </button>
        {showSuccesMessage && (
          <span className='font-semibold mt-3 text-green-500 text-x float-right'>
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
