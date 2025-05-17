import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
      document.title = `DinePro | ${title}`;
    }, [title]);
}
export default useTitle;
