import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://reqres.in/api/login',
        formData
      );

      console.log('response: ', response);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        toast({
          title: 'Successfully logged in',
        });
        navigate('/home');
      }
    } catch (error) {
      console.log(error);

      toast({
        title: error.response?.data?.error || 'Invalid Credentials',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="w-[60%] px-16 py-4">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-400 rounded-md p-4"
        >
          <div className="w-full flex gap-4">
            <div className="w-full flex flex-col gap-2 justify-center py-12 ">
              <h1 className="poppins-medium font-bold text-4xl text-center text-[#6A38C2]">
                Log In
              </h1>

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="demo@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className=""
                />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password here.."
                  value={formData.password}
                  onChange={handleChange}
                  className=""
                />
              </div>
              <Button
                type="submit"
                className="mt-4 bg-[#6A38C2] hover:bg-[#4712a1] text-lg"
              >
                Log in
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
