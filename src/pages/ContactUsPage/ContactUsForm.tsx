import { useForm } from "react-hook-form";
import { ErrorIcon } from "../../assets/icons/error/error";

type ContactUsFormInputs = {
  name: string;
  surname: string;
  email: string;
  phone: null;
  message: string;
}

const formDefaultValues: ContactUsFormInputs = {
  name: "",
  surname: "",
  email: "",
  phone: null,
  message: "",
};

const ContactUsForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactUsFormInputs>({
      defaultValues: formDefaultValues,
    });

    const onSubmit = () => {
      reset(formDefaultValues);
    };

    return (
      <div className="flex flex-col mr-[104px] gap-8 ">
        <div className="text-lg w-[520px] font-light">
          <p>Have a question or inquiry? Feel free to reach out to us via email. We're here to assist you!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 justify-between">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none"
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors && errors.name && (
                  <div className="flex gap-1 items-center text-xs text-[#FF0000]">
                    <ErrorIcon />
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="surname">Surname</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none"
                  type="text"
                  id="surname"
                  {...register("surname", { required: "Surname is required" })}
                />
                {errors && errors.surname && (
                  <div className="flex gap-1 items-center text-xs text-[#FF0000]">
                    <ErrorIcon />
                    {errors.surname.message}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-8 justify-between">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email:</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none"
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors && errors.email && (
                  <div className="flex gap-1 items-center text-xs text-[#FF0000]">
                    <ErrorIcon />
                    {errors.email.message}
                  </div>
                )}

              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone:</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none"
                  type="tel"
                  id="phone"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <div className="flex gap-1 items-center text-xs text-[#FF0000]">
                    <ErrorIcon />
                    {errors.phone.message}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message">Type your message:</label>
              <textarea
                id="message"
                className="border border-black resize-none outline-none px-2"
                rows={6}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors && errors.message && (
                <div className="flex gap-1 items-center text-xs text-[#FF0000]">
                  <ErrorIcon />
                  {errors.message.message}
                </div>
              )}
            </div>

            <button className="text-base h-14 w-40 bg-[#1F2023] text-white" type="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
;

export default ContactUsForm;
