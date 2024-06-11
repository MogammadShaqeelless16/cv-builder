import React, { useState } from 'react';

const Education = () => {
    const [education, setEducation] = useState([
        { degree: 'B.Sc Computer Science', institution: 'University of XYZ', year: 2018 },
    ]);

    const updateEducation = (index, key, value) => {
        const updatedEducation = education.map((edu, i) =>
            i === index ? { ...edu, [key]: value } : edu
        );
        setEducation(updatedEducation);
    };

    return (
        <section className="education">
            <h2>Education</h2>
            <div className="education_container">
                {education.map((edu, index) => (
                    <div key={index} className="education_content">
                        <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                        />
                        <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        />
                        <input
                            type="number"
                            value={edu.year}
                            onChange={(e) => updateEducation(index, 'year', e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;