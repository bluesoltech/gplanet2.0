import DatePicker from "react-datepicker";
import {Link} from "react-router-dom"

import "react-datepicker/dist/react-datepicker.css";

const Form = ({ submitHandler, handleInputChange, setData, data }) => {
  return (
    <section className="flex justify-center">
      <form className="p-10" onSubmit={submitHandler}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleInputChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2 flex items-center">
                  +91
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    onChange={handleInputChange}
                    autoComplete="phone"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    maxLength="10"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date of Birth
                </label>
                <div className="mt-2">
                  <DatePicker
                    name="dob"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    selected={data.dob}
                    onChange={(date) => {
                      setData({
                        ...data,
                        ["dob"]: date,
                      });
                    }}
                    maxDate={new Date()}
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                  />
                </div>
              </div>
              {/* Gender  */}
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Gender
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="male"
                      name="gender"
                      type="radio"
                      required
                      checked={data.gender === "male"}
                      value="male"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="male"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="female"
                      name="gender"
                      type="radio"
                      required
                      checked={data.gender === "female"}
                      value="female"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="female"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="others"
                      name="gender"
                      type="radio"
                      required
                      checked={data.gender === "others"}
                      value="others"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="others"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Others
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>India</option>
                  </select>
                </div>
              </div>
              {/* Blood Group  */}
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Blood Group
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="A-positive"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "A+"}
                      value="A+"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="A-positive"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      A+
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="A-neg"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "A-"}
                      value="A-"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="A-neg"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      A-
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="B-positive"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "B+"}
                      value="B+"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="B-positive"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      B+
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="B-neg"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "B-"}
                      value="B-"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="B-neg"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      B-
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="O-positive"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "O+"}
                      value="O+"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="O-positive"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      O+
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="O-neg"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "O-"}
                      value="O-"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="O-neg"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      O-
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="AB-positive"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "AB+"}
                      value="AB+"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="AB-positive"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      AB+
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="A-neg"
                      name="bgroup"
                      type="radio"
                      required
                      checked={data.bgroup === "AB-"}
                      value="AB-"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="AB-neg"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      AB-
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Tshirt Size  */}
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  T-shirt size
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="s"
                      name="tshirt"
                      type="radio"
                      required
                      checked={data.tshirt === "S"}
                      value="S"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="s"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="m"
                      name="tshirt"
                      type="radio"
                      required
                      checked={data.tshirt === "M"}
                      value="M"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="m"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      M
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="l"
                      name="tshirt"
                      type="radio"
                      required
                      checked={data.tshirt === "L"}
                      value="L"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="l"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      L
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="xl"
                      name="tshirt"
                      type="radio"
                      required
                      checked={data.tshirt === "XL"}
                      value="XL"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="xl"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      XL
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="2xl"
                      name="tshirt"
                      type="radio"
                      required
                      checked={data.tshirt === "2XL"}
                      value="2XL"
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="2xl"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      2XL
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Category  */}
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Category
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3 required">
                    <input
                      id="5"
                      name="category"
                      required
                      checked={data.category === "5 KM"}
                      value="5 KM"
                      onChange={handleInputChange}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="male"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      5 KM
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3 required">
                    <input
                      id="10"
                      name="category"
                      required
                      checked={data.category === "10 KM"}
                      value="10 KM"
                      onChange={handleInputChange}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="female"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      10 KM
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street"
                    id="street"
                    required
                    onChange={handleInputChange}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    onChange={handleInputChange}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    required
                    onChange={handleInputChange}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="pin"
                    id="pin"
                    required
                    onChange={handleInputChange}
                    autoComplete="pin"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="Ephone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Emergency Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="ePhone"
                    name="ePhone"
                    type="text"
                    autoComplete="phone"
                    required
                    onChange={handleInputChange}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    maxLength="10"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="eName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Emergency name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="eName"
                    id="eName"
                    required
                    onChange={handleInputChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="relation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Relation with Emergency contact
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="eRelation"
                    id="eRelation"
                    required
                    onChange={handleInputChange}
                    autoComplete="relation-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/"><button
            type="reset"
            className="text-sm font-semibold leading-6 text-gray-900"
            // onClick={(e) => e.target.reset()}
          >
            Cancel
          </button></Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
