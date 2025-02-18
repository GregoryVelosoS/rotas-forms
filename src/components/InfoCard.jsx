import { useParams } from "react-router-dom"

const InfoCard = () => {
  
  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <h1>Informação do InfoCard: {id}</h1>
    </div>
  )
}

export default InfoCard
