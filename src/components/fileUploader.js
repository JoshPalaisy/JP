import React from 'react'

const FileUploader = () => {
  return(
    <React.Fragment>
      <div class="file-field input-field">
        <div class="btn">
          <span>File</span>
          <input type="file" multiple />
      </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Upload one or more files" />
      </div>
          </div>
    </React.Fragment>
  )
}

export default FileUploader