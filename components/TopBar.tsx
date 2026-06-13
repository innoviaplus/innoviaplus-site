import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1300px] bg-[#FF6900] h-10 md:rounded-t-2xl flex items-center px-4 md:px-8">
        <div className="flex items-center gap-6 text-sm font-medium text-white">
          <a href="mailto:info@innoviaplus.com" className="flex items-center gap-2 hover:underline">
            <Mail size={15} />
            info@innoviaplus.com
          </a>
          <a href="tel:+905409906344" className="flex items-center gap-2 hover:underline">
            <Phone size={15} />
            +90 540 990 6344
          </a>
        </div>
      </div>
    </div>
  );
}
