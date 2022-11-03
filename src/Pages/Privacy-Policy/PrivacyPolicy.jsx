import React, { useEffect } from 'react'

const PrivacyPolicy = () => {

    useEffect(() => {
        document.querySelector("body").classList.add("other-pages");
    
        return () => {
          document.querySelector("body").classList.remove("other-pages");
        };
      }, []);
    return (
        <>
  <div class="breadcrumb">
        <div class="container">
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="faq.html" class="active">Privacy Policy</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="privacy-policy-section">
        <div class="container">
            <div class="privacy-policy-inner">
                <div class="content-section">
                    <h2>Privacy Policy</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
               </div>
               <div class="content-section">
                    <h2>How We Share Your Information</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
              </div>
              <div class="content-section">
                <h2>To Whom Does This Policy Apply</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
             </div>
             <div class="content-section">
                <h2>General Matters</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
             </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default PrivacyPolicy