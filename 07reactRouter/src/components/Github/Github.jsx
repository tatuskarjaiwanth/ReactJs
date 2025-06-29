import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState({}) // You should use {} instead of [] for an object

  useEffect(() => {
    fetch('https://api.github.com/users/tatuskarjaiwanth')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
      </div>
      <div className='flex justify-center'>
        <img src={data.avatar_url} alt="GitHub Profile" className='w-48 h-48 rounded-full border-4 border-gray-700' />
      </div>
    </>
  )
}

export default Github
