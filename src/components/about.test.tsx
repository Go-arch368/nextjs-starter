import { render, screen } from '@testing-library/react';
import About from '@/app/about/page'; 
import { useUser } from '@clerk/nextjs';


jest.mock('@clerk/nextjs', () => ({
  useUser: jest.fn(),
}));

describe('About Component', () => {
  test('should display loading message when user data is not loaded', () => {
  
    (useUser as jest.Mock).mockReturnValue({
      isLoaded: false,
      isSignedIn: false,
      user: null,
    });

    render(<About />);

    
    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test('should display sign-in prompt when user is not signed in', () => {
   
    (useUser as jest.Mock).mockReturnValue({
      isLoaded: true,
      isSignedIn: false,
      user: null,
    });

    render(<About />);

  
    const signInMessage = screen.getByText(/Please sign in to view this page/i);
    expect(signInMessage).toBeInTheDocument();
  });

  test('should display user greeting when user is signed in', () => {
    
    (useUser as jest.Mock).mockReturnValue({
      isLoaded: true,
      isSignedIn: true,
      user: { firstName: 'John' },
    });

    render(<About />);


    const greetingMessage = screen.getByText(/Hello, John!/i);
    expect(greetingMessage).toBeInTheDocument();
  });
});
