import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateTemplate } from 'src/redux/slices/templateSlice';
import { select } from 'jodit/types/plugins/select/select';

const HomeLayout = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const controls = useAnimation();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleChooseTemplate = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTemplateSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTemplate(event.target.value);
    console.log(`Selected template: ${selectedTemplate}`);
    dispatch(updateTemplate(event.target.value));
  };

  const handleNextStep = () => {
    if (selectedTemplate !== null) {
      router.push(`/builder?template=${selectedTemplate}`);
    }
  };

  console.log(selectedTemplate);

  return (
    <div>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-slate-600 p-16 rounded shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <img className="rounded-lg w-40 h-40" src="/icons/beaver.png" alt="Beaver Logo" />
            </div>
            <h2 className="text-3xl text-slate-100 font-bold mb-6 text-center">
              Welcome to the Resume Builder
            </h2>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                variant="contained"
                onClick={handleChooseTemplate}
              >
                Choose Template
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div id="select-modal" className="relative p-4 w-full max-w-4xl max-h-[80%]">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-y-auto max-h-full">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Select your template
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 overflow-y-auto max-h-[60vh]">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Select your desired template:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <input
                      type="radio"
                      id="template-1"
                      name="template"
                      value="1"
                      className="hidden peer"
                      onChange={handleTemplateSelection}
                    />
                    <label
                      htmlFor="template-1"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Template 1</div>
                        <img
                          src="/icons/Classic-Resume.jpg"
                          className="w-full h-auto"
                          alt="Template 1"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="col-span-1">
                    <input
                      type="radio"
                      id="template-2"
                      name="template"
                      value="2"
                      className="hidden peer"
                      onChange={handleTemplateSelection}
                    />
                    <label
                      htmlFor="template-2"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Template 2</div>
                        <img
                          src="/icons/Classic-Resume.jpg"
                          className="w-full h-auto"
                          alt="Template 1"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="col-span-1">
                    <input
                      type="radio"
                      id="template-3"
                      name="template"
                      value="3"
                      className="hidden peer"
                      onChange={handleTemplateSelection}
                    />
                    <label
                      htmlFor="template-3"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Template 3</div>
                        <img
                          src="/icons/Classic-Resume.jpg"
                          className="w-full h-auto"
                          alt="Template 1"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                {/* <div className="grid grid-cols-3 gap-4">
                  <div>template 1</div>
                  <div>template 2</div>
                  <div>template 3</div>
                </div> */}
                <Link href="/builder">
                  <div>
                    <button
                      className="text-white w-full inline-flexflex justify-center bg-teal-600 hover:bg-teal-700   focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:teal-blue-800 mt-4"
                      onClick={handleNextStep}
                    >
                      Next step
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HomeLayout;
