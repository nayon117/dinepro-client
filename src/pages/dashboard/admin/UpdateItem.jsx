import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const UpdateItem = () => {
  const item = useLoaderData()
  console.log(item)
  return (
    <div className=''>
          <SectionTitle heading="Update Items" subHeading="Hurry Up" />
    </div>
  )
}
export default UpdateItem;
