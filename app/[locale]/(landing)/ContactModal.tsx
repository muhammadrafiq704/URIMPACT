import { useTranslations } from "next-intl";
import MultiSelect from "./components/MutliSelectDropdown";

const ContactModal = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const t = useTranslations("ContactModal");

    if (!open) return null;

  const industryOptions = t.raw("industry_options") as { label: string, value: string }[];
    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-200 overflow-hidden"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl p-6 w-[90%] md:max-w-3xl shadow-xl animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-semibold mb-4">{t("title")}</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
                    <input
                        type="text"
                        placeholder={t("name_placeholder")}
                        className="bg-secondary/10 border border-black/20 rounded-lg px-4 py-2.5 text-black placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 w-full"
                    />
                    <input
                        type="email"
                        placeholder={t("email_placeholder")}
                        className="bg-secondary/10 border border-black/20 rounded-lg px-4 py-2.5 text-black placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 w-full"
                    />
                    <input
                        type="text"
                        placeholder={t("company_placeholder")}
                        className="bg-secondary/10 border border-black/20 rounded-lg px-4 py-2.5 text-black placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 w-full"
                    />
                    <MultiSelect
                        placeholder={t("industry_placeholder")}
                        options={industryOptions}
                    />
                    <input
                        type="text"
                        placeholder={t("job_role_placeholder")}
                        className="bg-secondary/10 border border-black/20 rounded-lg px-4 py-2.5 text-black placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 w-full"
                    />
                    <input
                        type="text"
                        placeholder={t("country_placeholder")}
                        className="bg-secondary/10 border border-black/20 rounded-lg px-4 py-2.5 text-black placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 w-full"
                    />
                    <textarea
                        placeholder={t("message_placeholder")}
                        className="bg-secondary/10 border border-black/20 rounded-lg px-4 py-2.5 text-black placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 w-full col-span-2 h-24"
                    />
                    <button type="submit" className="bg-primary text-white py-2 rounded-lg hover:bg-[#077168] duration-300 col-span-2 text-lg shadow-md shadow-primary/50">
                       {t("submit_button")}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;
