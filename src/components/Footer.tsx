import { FC } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <footer className="mt-16 border-t border-border bg-foreground/[0.02]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Deniz Isikli</h3>
            <p className="max-w-md text-sm text-muted-foreground">
                Computer Science student at DTU with a passion for software development, and competitive programming.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#experience">Experience</a></li>
              <li><a className="hover:text-primary transition-colors" href="#projects">Projects</a></li>
              <li><a className="hover:text-primary transition-colors" href="#skills">Skills</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-3 flex items-center gap-4">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/deniz-isikli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://github.com/DenizIsikli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:denizisikli7@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Deniz Isikli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
