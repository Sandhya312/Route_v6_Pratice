import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Page() {
  const location = useLocation();
  const [pageNo, setpageNo] = useState(location.state.pagename || 'page1');
  // useEffect(() => {
  //   if (location.state && location.state.pagename) {
  //     setpageNo(location.state.pagename);
  //   }
   
  // }, [])

  const Navigate = useNavigate();
  console.log(location);

  return (

    <div className='flex'>
      <button className='btn btn-danger'
        onClick={() => {
          Navigate("/home")
        }}
      >Back</button>
      <h1>This is {pageNo} and this page contains movie section.</h1>
      <div>
        <button className="btn btn-primary"
          onClick={() => {
            Navigate(`/page/${pageNo}/${(location.state.content1).split(" ")[0]}`,{state:{pagename:pageNo,content:location.state.content1}})
          }}
        >{location.state.content1} section</button>
        {"      "}
        {"      "}
        <button
          onClick={() => {
            Navigate(`/${pageNo}/${(location.state.content2).split(" ")[0]}`,{state:{pagename:pageNo,content:location.state.content1}})
          }}
          className="btn btn-success">{location.state.content2} section</button>
      </div>
      <div>

        {(!location.state || !pageNo) && <div>
          <h1>Loading...</h1>
        </div>}

        {(location.state || pageNo) && <Outlet />}

      </div>

    </div>
  );
}

export default Page;
