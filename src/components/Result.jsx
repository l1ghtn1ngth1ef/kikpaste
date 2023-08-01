import axios from "axios"
import { useEffect, useState } from "react"

const Result = () => {
  const [data, setData] = useState([])
  const getData = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setData(res?.data.reverse() ?? [])
      })
      .catch((err) => console.log(err))
  }

  // detele item list
  const Delete = (id) => {
    axios
      .delete(`http://localhost:8000/posts/${id}`)
      .then(() => {
        getData()
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="wrap-result">
      {data.map((item, id) => {
        return (
          <div key={id} className="result-card">
            <div dangerouslySetInnerHTML={{ __html: item.textEditor }}></div>
            <button onClick={() => Delete(item.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Result
