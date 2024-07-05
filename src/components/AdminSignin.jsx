import React, { useEffect } from 'react'

const AdminSignin = () => {

    function handleCallbackResponse(response){
        console.log(response.credential)
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id:"726319989137-rpvfh0lmbe4b03mammunklv65lp381it.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline", size:"large"
            }
        )
    }, [])
  return (
    <>
      <div id="signInDiv"></div>
    </>
  )
}

export default AdminSignin
