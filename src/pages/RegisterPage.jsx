import { Link } from "react-router";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-100 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-medium mb-4">Register</h2>

          <form>
              <InputField 
              label="Full Name" 
              type="text" 
              placeholder="Enter your full name" />
              <InputField
              label="Email Address" 
              type="email" 
              placeholder="Enter your Email Address" />
              <InputField
              label="Password" 
              type="password" 
              placeholder="Enter your Password" />
              <p>
                <input type="checkbox" id="remember" className="mr-2 " />
                <label htmlFor="remember">I agree to the terms and conditions</label>
              </p>
              <Button type="submit">Register</Button>
              <p className="text-sm pt-4 inline-block">
                have an account? <Link to="/login" className="text-blue-500">Login Now</Link>
              </p>
          </form>
      </div>
    </div>
  )
}
