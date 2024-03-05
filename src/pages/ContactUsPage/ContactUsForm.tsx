import { useForm } from "react-hook-form";
import { ErrorIcon } from "../../assets/icons/error/error";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactUsFormInputs>({
      defaultValues: formDefaultValues,
    });

    const onSubmit = () => {
      reset(formDefaultValues);
    };

    return (
      <div className="flex flex-col pr-[104px] gap-8">
        <div className="text-lg font-light lg:w-[513px] md:w-[513px] xs:w-[295px]">
          <p>{t("contactUsPage.form.title")}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8 w-fit">
            <div className="flex gap-8
              lg:flex-row lg:justify-between
              md:flex-row md:justify-between
              xs:flex-col
            "
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name">{t("contactUsPage.form.inputOne")}</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none px-2"
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
                <label htmlFor="surname">{t("contactUsPage.form.inputTwo")}</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none px-2"
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

            <div className="flex gap-8
              lg:flex-row lg:justify-between
              md:flex-row md:justify-between
              xs:flex-col
            "
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email">{t("contactUsPage.form.inputThree")}</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none px-2"
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
                <label htmlFor="phone">{t("contactUsPage.form.inputFour")}</label>
                <input
                  className="w-[288px] py-3 border-b border-black outline-none px-2"
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
              <label htmlFor="message">{t("contactUsPage.form.textarea")}</label>
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
              {t("contactUsPage.form.button")}
            </button>
          </div>
        </form>
      </div>
    );
  }
;

export default ContactUsForm;
