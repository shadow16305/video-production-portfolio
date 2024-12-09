import telegram from "../../assets/icons/telegram-icon.svg";
import { BriefcaseBusiness, Mail, User, Volume2 } from "lucide-react";
import { Input } from "./input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "motion/react";

export const Form = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    fetch("http://localhost:3000/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          toast("Email sent successfully!");
          reset();
          setLoading(false);
        } else {
          toast("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast("An error occurred while sending the email.");
      });
  };

  return (
    <form
      className="flex flex-col gap-y-4 w-5/12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between w-full gap-x-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-1/2"
        >
          <Input
            type="text"
            placeholder="Your name"
            icon={<User className="text-neutral-400" />}
            {...register("name", { required: true })}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-1/2"
        >
          <Input
            type="email"
            placeholder="Your email"
            icon={<Mail className="text-neutral-400" />}
            {...register("email", { required: true })}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Input
          type="text"
          placeholder="Business name (optional)"
          icon={<BriefcaseBusiness className="text-neutral-400" />}
          {...register("business_name")}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Input
          type="text"
          placeholder="How did you hear about me?"
          icon={<Volume2 className="text-neutral-400" />}
          {...register("hear", { required: true })}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <textarea
          placeholder="Tell me more about what you want to create!"
          className="border border-white/50 bg-white/10 backdrop-blur-2xl flex justify-between rounded-[6px] py-4 px-6 min-h-[187px] focus:outline-none w-full"
          {...register("message", { required: true })}
        />
      </motion.div>
      <motion.button
        type="submit"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white px-8 py-4 font-['Syne'] font-bold text-sm text-black w-fit ml-auto group relative flex items-center gap-x-2"
        disabled={loading}
      >
        <span className="z-10 relative">{loading ? "Sending..." : "SEND"}</span>
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="size-4 text-black animate-spin fill-lime-200"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <img
            src={telegram}
            alt="telegram icon"
            className="z-10 relative size-4"
          />
        )}
        <div className="w-0 h-full bg-lime-200 group-hover:w-full transition-all duration-300 absolute top-0 left-0" />
      </motion.button>
    </form>
  );
};
