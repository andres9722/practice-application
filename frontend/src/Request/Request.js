const ENDPOINT = `http://localhost:3001/graphql`

const graphqlRequest = async (query, variables = {}) => {
  const response = await window.fetch(ENDPOINT, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query, variables})
  })

  const responseBody = await response.json()

  if (responseBody.errors) {
    const message = responseBody.errors.map(error => error.message).join('\n')
    throw new Error(message)
  }

  return responseBody.data
}

export const loadTasks = async () => {
  const query = `
    {
      allTasks {
        _id
        text
        isComplete
      }
    }
  `

  const { allTasks } = await graphqlRequest(query)

  return allTasks
}

export const addTask = async ({text, isComplete}) => {
  const query = `
    mutation {
      createTask(input: {text: "${text}", isComplete: ${isComplete}}) {
        _id
        text
        isComplete
      }
    }
  `

  const data = await graphqlRequest(query)

  return data
}

export const deleteTask = async (_id) => {
  const query = `
    mutation {
      deleteTask (_id: "${_id}") {
        _id
        text
        isComplete
      }
    }
  `

  const data = await graphqlRequest(query)

  return data
}

export const updateTask = async (_id, isComplete) => {
  const query = `
    mutation {
      updateTask(_id: "${_id}", isComplete: ${isComplete}) {
        text
        isComplete
      }
    }
  `

  const data = await graphqlRequest(query)

  return data
}
