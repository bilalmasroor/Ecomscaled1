import { useState } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Clock, Check } from "lucide-react";
import timezones from "../assets/timezones.json";
import userIcon from "../assets/images/user.svg";

const WEB3FORMS_ENDPOINT = import.meta.env.VITE_WEB3FORMS_ENDPOINT;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

// Custom Timezone Selector Component
const TimezoneSelector = ({ selectedTimezone, onTimezoneChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTimezones = timezones.filter(tz =>
    tz.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (timezone) => {
    onTimezoneChange(timezone);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border border-gray-300 rounded text-left bg-white hover:border-[#0065B1] focus:border-[#0065B1] focus:ring-2 focus:ring-[#0065B1] focus:ring-opacity-20 transition-all duration-200 flex items-center text-gray-600"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Clock className="w-4 h-4 text-[#0065B1] flex-shrink-0" />
          <span className="truncate text-sm">{selectedTimezone}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-2"
        >
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-hidden lg:left-full lg:top-0 lg:mt-0 lg:ml-2 lg:w-80"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search timezones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0065B1] focus:ring-opacity-20"
                  autoFocus
                />
              </div>
            </div>

            {/* Timezone List */}
            <div className="max-h-60 overflow-y-auto">
              {filteredTimezones.length > 0 ? (
                filteredTimezones.map((timezone, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => handleSelect(timezone)}
                    className={`w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors duration-150 flex items-center justify-between ${
                      selectedTimezone === timezone ? 'bg-blue-50 text-[#0065B1]' : 'text-gray-700'
                    }`}
                    whileHover={{ backgroundColor: "rgb(239, 246, 255)" }}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {timezone.split(' ')[0] + ' ' + timezone.split(' ')[1]}
                      </span>
                      <span className="text-xs text-gray-500">
                        {timezone.split(' ').slice(2).join(' ')}
                      </span>
                    </div>
                    {selectedTimezone === timezone && (
                      <Check className="w-4 h-4 text-[#0065B1]" />
                    )}
                  </motion.button>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-center">
                  No timezones found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const ScheduleConsultation = () => {
  const postToWeb3 = async (payload) => {
    const form = new FormData();
    form.append("access_key", ACCESS_KEY);
    Object.entries(payload).forEach(([k, v]) => form.append(k, v));
    return fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: form }).then((r) =>
      r.json()
    );
  };
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const isLastDay = today.getDate() === lastDayOfMonth.getDate();

  const [visibleMonth, setVisibleMonth] = useState(
    isLastDay ? new Date(today.getFullYear(), today.getMonth() + 1, 1) : today
  );

  const [expertData, setExpertData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    comments: "",
  });

  const [expertLoading, setExpertLoading] = useState(false);

  const handleExpertChange = (e) => {
    setExpertData({ ...expertData, [e.target.name]: e.target.value });
  };

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(
    "UTC +05:00 Pakistan (Karachi, Islamabad), Kazakhstan (Almaty)"
  );
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investAmount: "",
    expectedReturn: "",
  });

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const startOfMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1
  );
  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0
  ).getDate();
  const startDay = startOfMonth.getDay();

  const times = [
    "3:00 pm",
    "3:15 pm",
    "3:30 pm",
    "3:45 pm",
    "4:00 pm",
    "4:15 pm",
    "4:30 pm",
    "4:45 pm",
    "5:00 pm",
  ];

  const handleExpertSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(expertData.email)) {
      toast.error("Invalid email format");
      return;
    }
    setExpertLoading(true);
    try {
      await postToWeb3(expertData);
      toast.success("Thank you! We'll be in touch shortly.");
      setExpertData({
        name: "",
        email: "",
        contact: "",
        service: "",
        comments: "",
      });
    } catch {
      toast.error("Oops! Something went wrong.");
    } finally {
      setExpertLoading(false);
    }
  };

  const handleCalendarSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInfo.email)) {
      toast.error("Invalid email format");
      return;
    }
    const payload = {
      name: `${userInfo.firstName} ${userInfo.lastName}`,
      email: userInfo.email,
      phone: userInfo.phone,
      investAmount: userInfo.investAmount,
      expectedReturn: userInfo.expectedReturn,
      appointmentDate: selectedDate.toDateString(),
      appointmentTime: selectedTime,
      appointmentTimezone: selectedTimezone,
    };
    try {
      await postToWeb3(payload);
      toast.success("Your consultation is booked!");
      setStep(1);
      setSelectedTime("");
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        investAmount: "",
        expectedReturn: "",
      });
    } catch {
      toast.error("Failed to book — please try again.");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stepVariants = {
    enter: {
      opacity: 0,
      x: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const calendarDayVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const timeSlotVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      className="py-10 bg-white font-['Roboto']"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 md:px-16 lg:px-4 xl:px-24">
        {/* — Schedule A Free Consultation — */}
        <motion.div
          className="w-full lg:w-1/2 bg-white shadow-md rounded-lg"
          variants={itemVariants}
        >
          <motion.h2
            className="text-center font-bold py-6 text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule A Free Consultation
          </motion.h2>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                className="flex flex-col md:flex-row gap-1 px-4"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Calendar */}
                <motion.div
                  className="bg-[#0065B1] text-white w-full md:w-1/2 py-6 px-3 text-center rounded-lg flex flex-col items-center"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-gray-50 rounded-full mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={userIcon} alt="user" className="w-16 h-16" />
                  </motion.div>
                  <motion.h3
                    className="text-lg lg:text-xl 2xl:text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Meet with Ecomscaled
                  </motion.h3>

                  <div className="flex justify-between items-center w-full lg:w-3/4 xl:w-full mt-4 mb-2 px-2">
                    {!(
                      visibleMonth.getMonth() === today.getMonth() &&
                      visibleMonth.getFullYear() === today.getFullYear()
                    ) ? (
                      <motion.button
                        onClick={() =>
                          setVisibleMonth(
                            new Date(
                              visibleMonth.getFullYear(),
                              visibleMonth.getMonth() - 1
                            )
                          )
                        }
                        className="px-2 py-1 text-sm bg-white text-[#0065B1] border border-[#0065B1] rounded"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {"<"}
                      </motion.button>
                    ) : (
                      <div className="px-2 py-1 text-sm w-6 h-6"></div>
                    )}

                    <motion.p
                      className="text-base lg:text-lg font-medium flex-1 text-center w-full"
                      key={visibleMonth.toDateString()}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {visibleMonth.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </motion.p>

                    {!(
                      visibleMonth.getMonth() === today.getMonth() + 3 &&
                      visibleMonth.getFullYear() === today.getFullYear()
                    ) ? (
                      <motion.button
                        onClick={() =>
                          setVisibleMonth(
                            new Date(
                              visibleMonth.getFullYear(),
                              visibleMonth.getMonth() + 1
                            )
                          )
                        }
                        className="px-2 py-1 text-sm bg-white text-[#0065B1] border border-[#0065B1] rounded"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {">"}
                      </motion.button>
                    ) : (
                      <div className="px-2 py-1 text-sm w-6 h-6" />
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-xs 2xl:text-sm mt-6">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (d, i) => (
                        <motion.div
                          key={i}
                          className="font-bold text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          {d}
                        </motion.div>
                      )
                    )}
                    {Array(startDay)
                      .fill(null)
                      .map((_, i) => (
                        <div key={"empty-" + i}></div>
                      ))}
                    {Array(daysInMonth)
                      .fill(null)
                      .map((_, i) => {
                        const dayDate = new Date(
                          visibleMonth.getFullYear(),
                          visibleMonth.getMonth(),
                          i + 1
                        );

                        const isSelected =
                          selectedDate.toDateString() ===
                          dayDate.toDateString();
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const isPastDate =
                          new Date(dayDate).setHours(0, 0, 0, 0) <
                          new Date().setHours(0, 0, 0, 0);

                        return isPastDate ? (
                          <motion.div
                            key={i}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 opacity-40 cursor-not-allowed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 0.05 * i }}
                          >
                            {i + 1}
                          </motion.div>
                        ) : (
                          <motion.button
                            key={i}
                            onClick={() => setSelectedDate(dayDate)}
                            className={`w-7 h-7 flex items-center justify-center rounded-full transition-all ${
                              isSelected
                                ? "bg-white text-[#0065B1] font-bold"
                                : "hover:bg-white hover:text-[#0065B1] border border-[#0065B1] duration-300"
                            }`}
                            variants={calendarDayVariants}
                            whileHover="hover"
                            whileTap="tap"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * i }}
                          >
                            {i + 1}
                          </motion.button>
                        );
                      })}
                  </div>
                </motion.div>

                {/* Time & Timezone */}
                <motion.div
                  className="w-full md:w-1/2 p-4"
                  variants={itemVariants}
                >
                  <motion.h4
                    className="font-semibold text-sm lg:text-xl text-[#0065B1] mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Meeting duration
                  </motion.h4>
                  <motion.p
                    className="text-center font-semibold p-2 text-blue-400 border border-blue-300 mb-4 bg-blue-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    30 mins
                  </motion.p>
                  <motion.p
                    className="text-md mt-4 mb-2 lg:text-xl font-normal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    What time works best?
                  </motion.p>
                  <motion.p
                    className="text-sm text-gray-500 lg:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Showing times for{" "}
                    <span className="font-semibold">
                      {selectedDate.toDateString()}
                    </span>
                  </motion.p>
                  <motion.p
                    className="text-sm font-semibold text-[#0065B1] mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {selectedTimezone}
                  </motion.p>
                  <motion.div
                    className="mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <TimezoneSelector
                      selectedTimezone={selectedTimezone}
                      onTimezoneChange={setSelectedTimezone}
                    />
                  </motion.div>
                  <motion.div
                    className="max-h-40 overflow-y-auto space-y-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {times.map((time, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setSelectedTime(time)}
                        className={`block w-full p-2 rounded-md border border-gray-200 text-center ${
                          selectedTime === time
                            ? "bg-[#0065B1] text-white"
                            : "hover:bg-blue-100 text-gray-600"
                        }`}
                        variants={timeSlotVariants}
                        whileHover="hover"
                        whileTap="tap"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.05 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </motion.div>
                  <AnimatePresence>
                    {selectedTime && (
                      <motion.button
                        onClick={() => setStep(2)}
                        className="mt-6 w-full bg-[#0065B1] text-white p-2 rounded-md"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        Next Step
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="step2"
                onSubmit={handleCalendarSubmit}
                className="px-6 pb-8 space-y-4"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.h3
                  className="text-xl md:text-3xl xl:text-4xl font-bold text-center text-[#0065B1] mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Your Information
                </motion.h3>
                <motion.p
                  className="text-center text-sm text-gray-600 md:text-lg xl:text-xl mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedDate.toDateString()} {selectedTime}
                </motion.p>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    {
                      name: "firstName",
                      placeholder: "First Name",
                      required: true,
                    },
                    {
                      name: "lastName",
                      placeholder: "Last Name",
                      required: true,
                    },
                    {
                      name: "email",
                      placeholder: "Email",
                      type: "email",
                      required: true,
                    },
                    { name: "phone", placeholder: "Phone", required: true },
                    {
                      name: "investAmount",
                      placeholder: "How much are you willing to invest?",
                      className: "md:col-span-2",
                    },
                    {
                      name: "expectedReturn",
                      placeholder: "Expected return?",
                      className: "md:col-span-2",
                    },
                  ].map((field, index) => (
                    <motion.input
                      key={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      type={field.type || "text"}
                      value={userInfo[field.name]}
                      onChange={handleUserInfoChange}
                      required={field.required}
                      className={`p-4 border-gray-400 border rounded w-full ${
                        field.className || ""
                      }`}
                      variants={itemVariants}
                      whileFocus={{ scale: 1.02, borderColor: "#0065B1" }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </motion.div>
                <motion.div
                  className="flex justify-between mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    onClick={() => setStep(1)}
                    type="button"
                    className="text-[#0065B1] underline"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-[#0065B1] text-white p-3 rounded-md"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Confirm & Book
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* — Speak To An Expert — */}
        <motion.form
          onSubmit={handleExpertSubmit}
          className="w-full lg:w-1/2 bg-white rounded-lg p-6 space-y-4"
          variants={itemVariants}
        >
          <motion.h2
            className="text-center font-bold text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Speak To An Expert
          </motion.h2>

          {[
            {
              name: "name",
              placeholder: "Your Name *",
              type: "text",
              required: true,
            },
            {
              name: "email",
              placeholder: "Your Email Address *",
              type: "email",
              required: true,
            },
            {
              name: "contact",
              placeholder: "Contact Number *",
              type: "text",
              required: true,
            },
          ].map((field, index) => (
            <motion.input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={expertData[field.name]}
              onChange={handleExpertChange}
              required={field.required}
              className="w-full border border-gray-400 p-3 rounded"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileFocus={{ scale: 1.02, borderColor: "#0065B1" }}
            />
          ))}

          <motion.select
            name="service"
            value={expertData.service}
            onChange={handleExpertChange}
            required
            className="w-full border border-gray-400 p-3 rounded"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileFocus={{ scale: 1.02, borderColor: "#0065B1" }}
          >
            <option value="">Service(s) You're Interested In *</option>
            <option value="Amazon Automation">Amazon Automation</option>
            <option value="TikTok Shop Automation">
              TikTok Shop Automation
            </option>
            <option value="Wallmart Automation">Wallmart Automation</option>
            <option value="Shopify Automation">Shopify Automation</option>
            <option value="Performance Marketing">Performance Marketing</option>
          </motion.select>

          <motion.textarea
            name="comments"
            placeholder="Additional Comments *"
            value={expertData.comments}
            onChange={handleExpertChange}
            required
            className="border-gray-400 w-full border p-3 rounded h-28"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileFocus={{ scale: 1.02, borderColor: "#0065B1" }}
          />

          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            If you opt-in to receive SMS communications from us, we will not
            share your phone number or related information with any external
            parties.
          </motion.p>

          <motion.button
            type="submit"
            disabled={expertLoading}
            className="bg-[#0065B1] text-white font-bold py-3 px-4 rounded hover:bg-white hover:text-[#0065B1] border border-[#0065B1] transition disabled:opacity-50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {expertLoading
              ? "Submitting..."
              : "Schedule A Free Consultation Now!"}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ScheduleConsultation;
