import { Link } from "react-router";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-100 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-medium mb-4">Login</h2>

          <form>
              <InputField
              label="Full Name" 
              type="text" 
              placeholder="Enter your Full Name" />
              <InputField
              label="Enter Email Address" 
              type="email" 
              placeholder="Enter your Email Address" />

              <p>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </p>
            <Button type="submit">Login</Button>
              <p className="text-sm pt-4 inline-block">
                Don't have an account? <Link to="/register" className="text-blue-500">Register Now</Link>
              </p>
          </form>
      </div>
    </div>
  )
}
