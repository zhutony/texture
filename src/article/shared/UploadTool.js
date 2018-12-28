import { ToggleTool } from '../../kit'

export default class UploadTool extends ToggleTool {
  renderButton ($$) {
    const button = super.renderButton($$)
    const isMultiple = this.uploadMultiple
    const input = $$('input').attr({
      'type': 'file'
    }).ref('input')
      .on('change', this.onFileSelect)

    if (!this.acceptAllFileTypes) {
      const fileType = this.getFileType()
      input.attr({'accept': fileType})
    }

    if (isMultiple) {
      input.attr({
        'multiple': 'multiple'
      })
    }

    return [button, input]
  }

  getClassNames () {
    throw new Error('This method is abstract')
  }

  getFileType () {
    throw new Error('This method is abstract')
  }

  get uploadMultiple () {
    return false
  }

  get acceptAllFileTypes () {
    return false
  }

  onClick () {
    this.refs.input.val(null)
    this.refs.input.click()
  }

  onFileSelect (e) {
    let files = e.currentTarget.files
    this.executeCommand({
      files: Array.prototype.slice.call(files)
    })
  }
}
