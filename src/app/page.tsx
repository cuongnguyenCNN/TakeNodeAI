import React from "react";
import clsx from "clsx";
import {
  LucideYoutube,
  LucideFileText,
  LucideMic,
  LucideBookOpenCheck,
  LucideMap,
  LucideMail,
  LucideStar,
} from "lucide-react";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

function CustomButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={clsx(
        "font-medium rounded-2xl px-6 py-3 transition",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" &&
          "border border-blue-500 text-blue-600 bg-white hover:bg-blue-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface CustomCardProps {
  children: ReactNode;
}

function CustomCard({ children }: CustomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {children}
    </div>
  );
}

interface CustomCardContentProps {
  children: ReactNode;
  className?: string;
}

function CustomCardContent({
  children,
  className = "",
}: CustomCardContentProps) {
  return <div className={clsx("p-6", className)}>{children}</div>;
}
interface PricingCard {
  title?: string;
  price: string;
  features: string[];
  buttonText: string;
  highlight: boolean;
}
function PricingCard({
  title,
  price,
  features,
  buttonText,
  highlight,
}: PricingCard) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 shadow-md flex flex-col items-center text-center",
        highlight ? "bg-blue-600 text-white" : "bg-white text-gray-900"
      )}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-extrabold mb-4">{price}</div>
      <ul className="text-left mb-6 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <LucideStar className="w-4 h-4 text-yellow-400 mt-1" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <CustomButton
        variant={highlight ? "outline" : "primary"}
        className={
          highlight
            ? "text-white border-white hover:bg-white hover:text-blue-600"
            : ""
        }
      >
        {buttonText}
      </CustomButton>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          TakeNote
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Ghi chú thông minh từ video, PDF, YouTube, và bản ghi âm — dưới dạng
          văn bản hoặc mind map. Tăng hiệu suất, lưu giữ kiến thức.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <CustomButton>Bắt đầu miễn phí</CustomButton>
          <CustomButton variant="outline">Nâng cấp Pro</CustomButton>
        </div>
      </header>

      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          🎥 Xem TakeNote hoạt động
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl shadow-md"
          ></iframe>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <CustomCard>
          <CustomCardContent className="text-center">
            <LucideYoutube className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Trích xuất từ YouTube
            </h3>
            <p className="text-gray-600">
              Tự động nhận diện nội dung và tạo ghi chú từ video YouTube.
            </p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardContent className="text-center">
            <LucideFileText className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phân tích file PDF</h3>
            <p className="text-gray-600">
              Tạo ghi chú dễ hiểu từ sách, tài liệu, và giáo trình PDF.
            </p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardContent className="text-center">
            <LucideMic className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Ghi âm & nhận diện giọng nói
            </h3>
            <p className="text-gray-600">
              Chuyển lời nói thành văn bản và ghi chú theo thời gian thực.
            </p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardContent className="text-center">
            <LucideBookOpenCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ghi chú dạng văn bản</h3>
            <p className="text-gray-600">
              Tổ chức thông tin dưới dạng bullet points hoặc đoạn văn ngắn.
            </p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardContent className="text-center">
            <LucideMap className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mind Map trực quan</h3>
            <p className="text-gray-600">
              Biểu diễn kiến thức bằng sơ đồ tư duy sinh động, dễ nhớ.
            </p>
          </CustomCardContent>
        </CustomCard>
      </section>

      <section className="bg-gray-50 py-16 mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          ❤️ Người dùng nói gì?
        </h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <CustomCard>
            <CustomCardContent>
              <p className="text-gray-600 mb-4">
                “TakeNote đã thay đổi cách mình học và làm việc mỗi ngày.”
              </p>
              <div className="font-semibold">Nguyễn Huyền, Sinh viên Y</div>
            </CustomCardContent>
          </CustomCard>
          <CustomCard>
            <CustomCardContent>
              <p className="text-gray-600 mb-4">
                “Tôi dùng để tổng hợp lại nội dung họp team cực kỳ nhanh.”
              </p>
              <div className="font-semibold">Minh Trí, Quản lý dự án</div>
            </CustomCardContent>
          </CustomCard>
          <CustomCard>
            <CustomCardContent>
              <p className="text-gray-600 mb-4">
                “Mindmap của TakeNote quá tuyệt cho việc brainstorm.”
              </p>
              <div className="font-semibold">Linh Lê, Designer</div>
            </CustomCardContent>
          </CustomCard>
        </div>
      </section>

      <section className="text-center my-20">
        <h2 className="text-2xl font-semibold mb-4">
          📬 Nhận bản tin & tips tăng hiệu suất học tập/làm việc
        </h2>
        <form className="flex flex-col md:flex-row gap-4 justify-center mt-4">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="px-4 py-3 rounded-xl border w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <CustomButton className="flex gap-2">
            <LucideMail className="w-5 h-5" /> Đăng ký
          </CustomButton>
        </form>
        <p className="text-gray-400 text-sm mt-2">
          Không spam. Hủy đăng ký bất kỳ lúc nào.
        </p>
      </section>

      <section className="bg-blue-100 py-16 text-center rounded-2xl max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-4">
          ✨ Nâng cấp Pro để trải nghiệm đầy đủ
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Truy cập không giới hạn, ghi chú nâng cao, lưu trữ đám mây, và nhiều
          tính năng sắp tới.
        </p>
        <CustomButton className="text-lg px-8 py-4 rounded-full">
          Nâng cấp lên bản Pro
        </CustomButton>
      </section>
      <section className="py-20 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">💎 Gói dịch vụ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Miễn phí"
            price="0₫"
            features={[
              "Trích xuất từ YouTube",
              "Ghi chú từ PDF",
              "Ghi âm & chuyển giọng nói",
            ]}
            buttonText="Dùng ngay"
            highlight
          />
          <PricingCard
            title="Pro"
            price="99.000₫ / tháng"
            features={[
              "Mind Map",
              "Lưu trữ đám mây",
              "Ưu tiên hỗ trợ",
              "Không giới hạn ghi chú",
            ]}
            buttonText="Nâng cấp Pro"
            highlight
          />
          <PricingCard
            title="Doanh nghiệp"
            price="Liên hệ"
            features={[
              "Tùy chỉnh tính năng",
              "Bảo mật nâng cao",
              "Tích hợp API",
              "Quản lý nhiều người dùng",
            ]}
            buttonText="Liên hệ ngay"
            highlight
          />
        </div>
      </section>
      <footer className="text-center text-gray-500 mt-20 text-sm">
        © 2025 TakeNote. Tất cả quyền được bảo lưu.
      </footer>
    </div>
  );
}
