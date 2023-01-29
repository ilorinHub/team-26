
import { Oval } from "react-loader-spinner";


function Loader() {
  return (
    <div className="img-Loader">
      <Oval
        height={80}
        width={80}
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffffff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loader;