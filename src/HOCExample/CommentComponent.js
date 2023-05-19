import React from 'react'
import HOC from './HOC'

const CommentComponent = ({ countNumber , handleClick }) => {
  return (
    <div>
      Total comments - {countNumber}
      <button onClick={handleClick}>Add comment</button>
    </div>
  )
}

const EnhanceComments = HOC(CommentComponent)
export default EnhanceComments;