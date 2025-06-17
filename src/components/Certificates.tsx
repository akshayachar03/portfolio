import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesData } from '../data';
import { ExternalLink, Github, X } from 'lucide-react';

const Certificates: React.FC = () => {
  const [selectedCertificates, setSelectedCertificates] = useState<number | null>(null);

  const openCertificates = (id: number) => {
    setSelectedCertificates(id);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificates = () => {
    setSelectedCertificates(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificates" className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Certificates</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my earned certificates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificates, index) => (
            <motion.div
              key={certificates.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openCertificates(certificates.id)}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={certificates.imageUrl} 
                  alt={certificates.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3">
                      {certificates.githubLink && (
                        <a 
                          href={certificates.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} className="text-white" />
                        </a>
                      )}
                      {/* {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificates.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{certificates.description}</p>
                <div className="flex flex-wrap gap-2">
                  {certificates.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {certificates.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      +{certificates.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/akshayachar03/certificates/blob/main/README.md"  // Replace with your GitHub profile or repo link
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
          >
            <Github size={20} className="mr-2" />
            View All Certificates
          </a>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedCertificates !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              onClick={closeCertificates}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {certificatesData.find(p => p.id === selectedCertificates) && (
                  <>
                    <div className="relative">
                      <img 
                        src={certificatesData.find(p => p.id === selectedCertificates)?.imageUrl} 
                        alt={certificatesData.find(p => p.id === selectedCertificates)?.title} 
                        className="w-full h-64 object-cover"
                      />
                      <button 
                        onClick={closeCertificates}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {certificatesData.find(p => p.id === selectedCertificates)?.title}
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {certificatesData.find(p => p.id === selectedCertificates)?.longDescription || 
                         certificatesData.find(p => p.id === selectedCertificates)?.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Learned</h3>
                        <div className="flex flex-wrap gap-2">
                          {certificatesData.find(p => p.id === selectedCertificates)?.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        {certificatesData.find(p => p.id === selectedCertificates)?.demoLink && (
                          <a 
                            href={certificatesData.find(p => p.id === selectedCertificates)?.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 transition-colors"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        
                        {certificatesData.find(p => p.id === selectedCertificates)?.githubLink && (
                          <a 
                            href={certificatesData.find(p => p.id === selectedCertificates)?.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 transition-colors"
                          >
                            <Github size={18} />
                            <span>View Certificate</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;