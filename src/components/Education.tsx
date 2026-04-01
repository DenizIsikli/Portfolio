import { FC } from "react";
import { education } from "../data/education";
import DTULogo from "../assets/DTU.png";

const Education: FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-md border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={DTULogo}
                  alt="DTU Logo"
                  className="w-16 h-16 object-contain rounded-sm"
                />
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.period}
                  </p>
                  {edu.extra && <p className="mt-2 text-sm">{edu.extra}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
