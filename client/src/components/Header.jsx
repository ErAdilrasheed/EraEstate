import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user)
  const [searchTerm, setSearchTerm] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className="bg-slate-700 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-yellow-600 text-3xl">Era </span>
            <span className="text-green-600 text-3xl"> Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex gap-4 font-semibold bg-slate-700 sm:bg-transparent absolute sm:static top-16 left-0 w-full sm:w-auto text-end pr-4`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className="text-white hover:underline py-2 sm:py-0">Home</li>
          </Link>
          <Link to="/search" onClick={() => setMenuOpen(false)}>
            <li className="text-white hover:underline py-2 sm:py-0">
              Properties
            </li>
          </Link>
          <Link to="/agents" onClick={() => setMenuOpen(false)}>
            <li className="text-white hover:underline py-2 sm:py-0">Agents</li>
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            <li className="text-white hover:underline py-2 sm:py-0">Contact</li>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className="text-white hover:underline py-2 sm:py-0">About</li>
          </Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover mx-auto sm:mx-0"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-white hover:underline py-2 sm:py-0">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  )
}
