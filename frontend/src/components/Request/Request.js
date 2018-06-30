const ENDPOINT = `http://localhost:3001/graphql`

const loadTasks = async () => {
  const response = await window.fetch(ENDPOINT, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      query: `
        {
          allTasks {
            text
            isComplete
          }
        }
      `
    })
  })

  const responseBody = await response.json()

  return responseBody.data.allTasks
}

export default loadTasks
