import React from 'react'

function Card(props) {
    console.log("props :" , props)
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
  <img className="w-full h-48 object-cover" src="https://imgs.search.brave.com/o-bBcHf9TAjBD3yEQy--QBgGorTZ3_0WTP81namOuyE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aGRpbm5vdmF0aW9u/cy5jb20vY2RuL3No/b3AvZmlsZXMvUFhM/LTIwMjUwMjA5XzE0/Mjc0MDEyNy5QT1JU/UkFJVC5qcGc_dj0x/NzQ1OTg3ODEwJndp/ZHRoPTUzMw" alt="Card Image" />
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">Beautiful Nature</h2>
    <p className="text-gray-600 mt-2 text-sm">
      Explore the beauty of untouched landscapes, forests, and mountains.
    </p>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">
      Learn More
    </button>
  </div>
</div>

  )
}

export default Card