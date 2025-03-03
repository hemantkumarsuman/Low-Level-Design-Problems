import React from 'react'

const CommentBox = ({data}) => {
  return (
    <div className='my-10'>
        {
            data.map((comment,index)=> (
                <div className='pl-10 border-l-2 border-black' key={index}>
                    <div className=''>
                        <img className='w-10 rounded-full' src='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png' alt='profile'/>
                    </div>
                    <div>
                        <p className='font-bold px-2 py-2'>{comment.username}</p>
                        <p className='text-sm'>{comment.comment}</p>
                    </div>
                    <div>{comment.replies && <CommentBox data={comment.replies}/>}</div>
                    </div>
            ))
        }
    </div>
  )
}

export default CommentBox