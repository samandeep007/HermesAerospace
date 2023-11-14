import axios from 'axios';
import { useState} from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Newsletter = () => {

  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');


  const handleSubmit = async () => {
    axios.post(`http://localhost:5000/api/newsletter`, {
    subject, message
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  };


  return (
    <div style={{flex: "4"}} className="bg-white min-h-screen">
    <div style={{maxWidth: "100%"}} className="container mx-auto">
      <div className="bg-white  px-6 py-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Send a Newsletter</h1>
        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-10">
          <div className="flex-1 mr-2">
            <label htmlFor="companyName" className="font-medium text-gray-700 block mb-2">
              Subject
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={subject}
              onChange={(e)=>{setSubject(e.target.value)}}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
            />
          </div>
    </div>
    <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
  Message
</label>
<ReactQuill
  style={{height:"500px", marginBottom: "60px"}}
  value={message}
  onChange={(value)=>{setMessage(value)}}
  modules={{
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }], // Add color and background modules
      [{ 'border': [] }], // Add border module
      [{ 'direction': 'rtl' }, { 'direction': 'ltr' }], // Add direction module
      [{ 'lineHeight': [] }], // Add lineHeight module
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  }}
  formats={[    'header', 'font', 'size',    'bold', 'italic', 'underline', 'strike', 'blockquote',    'list', 'bullet', 'indent',    'link', 'image', 'video',    'align',    'color', 'background',  'border',  'direction',  'lineHeight'  ]}
/>


 
         <div className="flex mt-8 space-x-4">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
          
      </div>
     
  </div>
</div>
  );
};
export default Newsletter;