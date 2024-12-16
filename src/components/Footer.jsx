function Footer() {
  return (
    <footer className="absolute bg-gray-100 text-gray-800 w-full mt-32">
      {/* Newsletter Section */}
      <div className="relative flex flex-row justify-around items-center bg-black text-white text-center py-8 mx-auto lg:w-[1240px] -top-20 rounded-[20px]">
        <h2 className="text-5xl font-bold mb-4 text-left">
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>
        <form className="flex flex-col gap-2 w-[349px] justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 text-black py-2 rounded-full outline-none w-full"
          />
          <button className="bg-white text-black px-6 py-2 w-full rounded-full font-semibold">
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Footer Links Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and About */}
        <div>
          <h3 className="font-bold text-xl mb-4">SHOP.CO</h3>
          <p>
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="font-bold mb-4">HELP</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h4 className="font-bold mb-4">FAQ</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="font-bold mb-4">RESOURCES</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/paypal.png" alt="PayPal" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/applepay.png" alt="Apple Pay" className="h-6" />
            <img src="/googlepay.png" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
