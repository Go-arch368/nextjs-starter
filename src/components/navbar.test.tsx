import { render, screen } from "@testing-library/react";
import Navbar from "./navbar"; 
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";


jest.mock('@clerk/nextjs', () => ({
  useClerk: jest.fn(),
  SignedIn: ({ children }: any) => <div>{children}</div>, 
  SignedOut: ({ children }: any) => <div>{children}</div>, 
  SignInButton: ({ children }: any) => <button>{children}</button>,
  UserButton: () => <button>User Button</button>,
}));

describe("Navbar", () => {
  test("should render Navbar with 'Clerk-Template' text", () => {
    render(<Navbar />);

    
    const linkElement = screen.getByText(/Clerk-Template/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should render the Home link", () => {
    render(<Navbar />);

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test("should render the Sign In button when user is signed out", () => {
    render(<Navbar />);

    
    const signInButton = screen.getByText(/Sign In/i);
    expect(signInButton).toBeInTheDocument();
  });

  test('should render the UserButton when user is signed in', () => {
  
    (useClerk as jest.Mock).mockReturnValue({ user: { firstName: "John" } });

    render(<Navbar />);

 
    const userButton = screen.getByText(/User Button/i);
    expect(userButton).toBeInTheDocument();
  });
});
