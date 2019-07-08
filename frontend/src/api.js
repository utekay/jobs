export default {
  BASE_URL: 'http://127.0.0.1:8000',
  JOBS_PER_PAGE: 50,

  async getJobs ({ jobName, page }) {
    const r = await fetch(`${this.BASE_URL}/?jobName=${jobName}&page=${page || 0}`, {
      mode: 'cors'
    })
    return r.json()
  },

  async getJob ({ jobId }) {
    const r = await fetch(`${this.BASE_URL}/${jobId}`, {
      mode: 'cors'
    })
    return r.json()
  }
}
