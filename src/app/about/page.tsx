import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-2 sm:px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardContent>
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">About TrendyWear</h1>
          <p className="text-gray-600 mb-4 text-center text-base sm:text-lg">
            TrendyWear is your go-to destination for the latest fashion in clothing and accessories. We are passionate about bringing you high-quality, stylish products at affordable prices. Our mission is to make fashion accessible to everyone, with a curated selection for men, women, and all styles.
          </p>
          <p className="text-gray-600 mb-4 text-center text-base sm:text-lg">
            Inspired by leading open source ecommerce platforms, our site is designed for a seamless shopping experience. We value customer satisfaction and strive to deliver the best service possible.
          </p>
          <p className="text-gray-600 text-center text-base sm:text-lg">
            Thank you for choosing TrendyWear. Happy shopping!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
