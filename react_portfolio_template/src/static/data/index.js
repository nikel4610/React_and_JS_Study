export const menus = [
    { path: '/', name: 'home' },
    { path: '/global', name: 'insights center' },
    { path: '/solutions', name: 'solutions' },
];

export const landingData = {
    intro: [
        'KPMG Lighthouse',
        'Be the Best Business Probelm Solver with Data and AI',
        '삼정 KPMG Lighthouse는 지능형 자동화(Intelligent Automation) 기술과 이를 뒷받침할 인프라 기술을 개발하여 Audit, Tax, Deal Advisory, Consulting 자동화를 지원하고 업무 혁신 및 새로운 서비스 개발에 기여하는 조직입니다.'
    ],
    vision: [
        // vision title 
        'We will be the best business problem solver with Data and AI',
        '데이터와 인공지능 기술로 비즈니스 문제를 해결하는 최고의 전문가 조직이 되는 것',
        // vision contents 
        '신기술 역량을 집중 개발하여 법인의 성장을 기술적으로 지원',
        '업무자동화를 위한 인지(Cognitive) 기술 분야 집중 개발',
        '전통적인 서비스 분야인 Audit, Tax, Deal Advisory에 신기술을 적용하여 기존 업무 효율성 향상',
        'Consulting 서비스에 신기술을 적용하여 새로운 서비스 개발 및 제공'
    ],
    strategies: [
        { title: 'global asset', content: 'KPMG Lighthouse is a global organization. We develop and share global assets through large and interconnected networks' },
        { title: 'discovery', content: 'We discover business opportunities in the marketplace through AI, big data and software.' },
        { title: 'delivery', content: 'We provide our customs with solutions using AI and big data and create incredible excess value.' },
        { title: 'customization', content: 'We continuously customize and improve global assets that we have developed in line with the market and trends.' }
    ]
};

export const solutionsData = [
    {
        key: "ocr",
        contents:
        {
            title: "Smart OCR",
            link: '/ocr',
            thumbnail: 'https://cdn.pixabay.com/photo/2016/11/29/08/17/bible-1868359_1280.jpg',
            desc: [
                "OCR(Optical Character Recognition) is technology which makes it possible to convert text from scanned documents or images into editable format. When you simply scan a document, the resulting file is an image that computer software does not recognize as text. This means that users are not able to edit and search through the text, alter its formatting, extract information what they needs, etc. This is especially inconvenient for office documents where the ability to search, summarize and edit is essential. This problem is solved with OCR. The documents are fed into a scanner and then processed with OCR software, thus converting them to electronic documents. Optical character recognition is not a simple technology. It applies complicated mathematical algorithms. However, Smart OCR offers a very convenient and easy to use interface, so you can ripe the benefits of the technology without any hassle. Smart OCR is advanced technology and rather more specific. It is focuses on the utilize of recognized texts in various forms. Only the necessary fields can be extracted from the documents, and by efficiently working in various ways - collaboration with RPA - can reduce wasted resources. Through this process, more resources can be allocated to necessary tasks.",
                'Smart OCR is advanced technology and rather more specific. It is focuses on the utilize of recognized texts in various forms. Only the necessary fields can be extracted from the documents, and by efficiently working in various ways - collaboration with RPA - can reduce wasted resources. Through this process, more resources can be allocated to necessary tasks.',
                "Only the necessary fields can be extracted from the documents, and by efficiently working in various ways - collaboration with RPA - can reduce wasted resources. Through this process, more resources can be allocated to necessary tasks.",
            ],
            descKo: [
                "OCR(Optical Character Recognition)은 스캔한 문서나 이미지의 텍스트를 편집 가능한 형식으로 변환하는 기술입니다. 문서를 단순히 스캔하기만 한 파일은 이미지이기 때문에 컴퓨터가 텍스트를 인식할 수 없습니다. 이는 사용자가 문서의 텍스트를 편집, 검색, 포맷 변경 등을 할 수 없고, 문서로부터 필요한 정보를 추출하는 것이 불가능하다는 것을 의미합니다. 그러나 검색, 요약 및 편집 기능이 필수적인 사무실 문서에서는 이러한 제약사항이 특히 불편할 것입니다. 따라서 OCR로 이 문제를 해결하는 것입니다. 스캐너는 문서를 받아 OCR 소프트웨어로 처리하여 전자 문서로 변환합니다. OCR은 단순한 기술이 아닌, 복잡한 수학 알고리즘이 적용된 기술입니다. 하지만 Smart OCR은 매우 편리하고 사용하기 쉬운 인터페이스를 제공하기 때문에 사용자들은 사용법 숙지 등의 번거로움 없이 기술의 편리함만을 취할 수 있습니다. 수준 높은 기술인 Smar OCR은 다양한 형태의 텍스트를 인식하는 것에 초점을 맞추고 있습니다. 문서 전체에서 필요한 부분만 추출할 수 있게 하여 RPA와의 협업 등 다양한 방법으로 효율적인 업무 방식을 지원합니다. Smart OCR을 활용한 프로세스를 통해 자원을 효율적으로 업무에 할당할 수 있게 될 것 입니다. "
            ],
            items: [
                {
                    name: 'Tax OCR',
                    link: '/tax_ocr',
                    desc: [
                        {
                            title: "purpose",
                            content: "To extract data from machine-readable withholding receipt which is pdf file."
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to key-in manually"
                        },
                        {
                            title: "Used Technology",
                            content: "Python GUI Framework(tkinter), Python Open Source(pdfminer, pdfplumber, SMTP Server(for authentication)"
                        }
                    ],
                    arch: "tax-ocr.png",
                    mp4: "tax-ocr.mp4",
                    download: 'tac-ocr.exe'
                },
                {
                    name: 'Journal Entry OCR',
                    link: '/je_ocr',
                    desc: [
                        {
                            title: "purpose",
                            content: "To extract text data from journal-entry document which is image file"
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to key-in manually"
                        },
                        {
                            title: "Used Technology",
                            content: "Python Web Framework(Flask), OCR Model(Tesseract OCR)"
                        }
                    ],
                    arch: "journal-entry.png",
                    mp4: "journal-entry.mp4",
                },
                {
                    name: 'NH',
                    link: '/nh',
                    desc: [
                        {
                            title: "purpose",
                            content: "NH OCR project extracts the necessary information from documents from various templates (Receipt/Transaction Statement/Residential Draft/Graduation Certificate)."
                        },
                        {
                            title: "Business Effect",
                            content: "NH OCR can help you eliminate inefficient manual tasks and automate a variety of business processes from collaborate with RPA."
                        },
                        {
                            title: "Process",
                            image: "nh_process.png",
                        }
                    ],
                    arch: "nh.png",
                    mp4: "nh.mp4",
                },
                {
                    name: 'CLR',
                    link: '/clr',
                    desc: [
                        {
                            title: "purpose",
                            content: "CLR(Confirmation Letter Recognition) is a digitalization solution for audit automation."
                        },
                        {
                            title: "Business Effect",
                            content: "There are various processes in audit tasks, many of which are simple repetitive works. CLR assists in converting financial transaction documents in the form of image PDFs into Excel forms between these simple iterations. By automating simple typing tasks, it increases work efficiency and reduces a lot of costs."
                        },
                        {
                            title: "Process",
                            image: "clr_process.png",
                        }
                    ],
                    arch: "clr.png",
                    mp4: "clr.mp4",
                },
                {
                    name: 'AdaPT',
                    link: '/adapt',
                    desc: [
                        {
                            title: "purpose",
                            content: "AdaPT (Adaptive Processing Tool) is an end to end solution that provides users with an interface to upload documents that are analysed on the Ignite platform. The analysis or workflow on the Ignite platform is completely configurable for different kinds of documents."
                        },
                    ],
                    arch: "adapt.png",
                    mp4: "adapt.mp4",
                },
            ]
        }
    },
    {
        key: "nlp",
        contents:
        {
            title: "Finance NLP",
            link: '/nlp',
            thumbnail: 'https://cdn.pixabay.com/photo/2018/07/26/13/39/internet-3563638_1280.jpg',
            desc: [
                "Finance NLP aims to analyze real customer data and propose a solution using natural language processing technology. Classifying intent of sentences, Finding key expression and Question and Answering system were used for solving problem. That makes automate work and reduces manual working time.",
                'Finance NLP aims to analyze real customer data and propose a solution using natural language processing technology.',
            ],
            descKo: [
                "Finance NLP는 자연어 처리 기술을 이용하여 고객 데이터를 분석하고 솔루션을 제안하는 것을 목표로 합니다. Finance NLP는 문장의 의도를 분류하고, 핵심 표현을 찾고, 질의 응답하는 시스템을 사용하여 문제를 해결합니다. 이를 통해 업무를 자동화하여 업무 시간을 단축할 수 있습니다. "
            ],
            items: [
                {
                    name: 'K-CCM',
                    link: '/k_ccm',
                    desc: [
                        {
                            title: "purpose",
                            content: "Korean Cognitive Contract Management(KCCM) is a tool to extract key information regarding contract documents such as contract parties, contract amounts, key terms and conditions based on various machine intelligence technologies. KCCM reads PDF, Docx and HWP document, understands contract's context, extracts key information based on Machine Reading Comprehension, Named Entity Recognition and traditional Natual Language Processing technoloies."
                        },
                        {
                            title: "Business Effect",
                            content: "This solution enables to automate the extraction of contract key terms and conditions and store the meta data of the contracts, which can reduce business man-hours, prevent error-prone manual analytics and accelerate business process."
                        },
                        {
                            title: "Used Technology",
                            content: "MRC: Machine Reading Comprehension based HanBERT (Variants of BERT powered-by TwoBlockAI), NER: Name Entity Recognition based KoBERT (Variants of BERT powered-by SKTelecom), Clova OCR: The most powerful and accurate OCR for Korean documents, NLP: Traditional Natural Language Processing was used (Statistical NLP, RegEx and so on)"
                        }
                    ],
                    arch: "kccm.png",
                    mp4: "kccm.mp4",
                },
                {
                    name: 'Woori Bank D-BPR',
                    link: '/woori',
                    desc: [
                        {
                            title: "purpose",
                            content: "Woori-Bank's Digital Business Process Renovation (D-BPR) is a proof-of-concept project to transform current human-operated BP into AI/ML based BP. The Lighthouse Center provides a solution to read and understand 'The letter of decision for seizure of deposit' which is issued by the Law Court. This solution reads 'the Decision' document and extracts debtor infomation, debt amount, all deposit accounts of the debtor and prority of them and so forth, which are applied for further automated process by RPA robot."
                        },
                        {
                            title: "Business Effect",
                            content: "The client can promote business efficiency in handling 'The Decision' documents and minimize error-prone manual works on extracting and typing into the Woori-Bank system by automating the process"
                        },
                        {
                            title: "Used Technology",
                            content: "Clova OCR: The most powerful and accurate OCR for Korean documents, NER: Name Entity Recognition based KoBERT (Variants of BERT powered-by SKTelecom), RNN(LSTM): Specially crafted Neural Networks for classifiication terms in 'The Decision' documents, NLP: Traditional Natural Language Processing was used (Statistical NLP, RegEx and so on)"
                        }
                    ],
                    arch: null,
                    mp4: "woori.mp4",
                },
                {
                    name: 'Accounting Business Manual',
                    link: '/accounting',
                    desc: [
                        {
                            title: "purpose",
                            content: "This project is a project that finds answers by performing queries in manuals used in the actual field using machine learning technology"
                        },
                        {
                            title: "Used Technology",
                            content: "NLP Task, the latest Bert engine"
                        }
                    ],
                    arch: "abm.png",
                    mp4: "abm.mp4",
                },
                {
                    name: 'Libor',
                    link: '/libor',
                    desc: [
                        {
                            title: "purpose",
                            content: "How is your organization managing its London Interbank Finance Offering Rate (LIBOR) replacement efforts? With the use of the LIBOR interest rate expected to be eliminated, efforts will be needed to continuously reduce transactions of financial instruments using the interest rate index in the future, and to change the relevant provisions for existing transactions. Our service on LIBOR changes can help your organization prepare for the LIBOR deadline from comparing alternative reference rates."
                        },
                        {
                            title: "business effect",
                            content: "Now that the Libor interest rate disclosure is expected to stop, we can prepare for changes by detecting the Libor interest rate-related clause in existing contracts."
                        },
                        {
                            title: "Used Technology",
                            content: "Python Web Framework and React, Natural Language Proccessing"
                        }
                    ],
                    arch: "libor.png",
                    mp4: "libor.mp4",
                }
            ]
        }
    },
    {
        key: 'chatbot',
        contents: {
            title: "Automation Chatbot",
            link: '/chatbot',
            thumbnail: 'https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg',
            desc: [
                "Automation Chatbot aims to assist auditors in performing certain procedures, where they indirectly check the credit quality of the audited entity’s customers/borrowers. In the current practice, KPMG auditors manually input customer/borrower’s business administration number into the public website hosted by Korea National Tax Service (www.hometax.go.kr) and Korea Financial Telecommunications and Clearings Institute (www.knote.or.kr) and the sites return the information about the customer/borrower – whether they closed the business (www.hometax.go.kr) and whether their checking account is suspended. Replacing this manual process, as indicated in the below diagram, BEI enables the auditors input large number of data (business registration numbers) and receive the results through chatbot app, which will make the process automated and more efficient.",
                'Automation Chatbot aims to assist auditors in performing certain procedures, where they indirectly check the credit quality of the audited entity’s customers/borrowers. BEI enables the auditors input large number of data (business registration numbers) and receive the results through chatbot app, which will make the process automated and more efficient.',
                'Automation Chatbot aims to assist auditors in performing certain procedures, where they indirectly check the credit quality of the audited entity’s customers/borrowers.',
            ],
            descKo:[
                "Automation Chatbot은 회계 감사관들이 감사 대상 기업의 고객 또는 차입자의 신용을 간접적으로 확인하는 특정 업무 수행을 돕습니다. 현행 실무상 KPMG 회계 감사관들은 국세청 (www.hometax.go.kr)과 금융결제원(www.knote.or.kr)이 주최하는 공공홈페이지에 고객과 고객의 사업관리번호를 수동으로 입력하여 고객에 대한 정보를 얻을 수 있습니다. 고객에 대한 정보로 폐업 여부와 당좌 거래 정지 여부를 파악할 수 있습니다. 이러한 수동적인 업무 프로세스는 BEI Chatbot으로 대체될 수 있습니다. BEI Chatbot은 회계 감사관이 대량의 사업자 등록 번호 데이터를 입력하면 애플리케이션을 통해 그 결과를 받아볼 수 있도록 하여 업무를 자동화할 수 있습니다. "
            ],
            items: [
                {
                    name: 'Closed Business',
                    link: '/closed_business',
                    desc: [
                        {
                            title: "purpose",
                            content: "To retrieve information about closed business using chatbot-interface"
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to inquire closed business directly on National Tax Service's website"
                        },
                        {
                            title: "Used Technology",
                            content: "Microsoft Botframework(Azure Bot Channel Registration, Azure Language Understanding) MS Botbuilder(Python, Web Framework - Aiohttp)"
                        }
                    ],
                    arch: "closed_business.png",
                    mp4: "closed_business.mp4",
                },
                {
                    name: 'Suspended Account',
                    link: '/check_transaction',
                    desc: [
                        {
                            title: "purpose",
                            content: "To retrieve information about suspended account using chatbot-interface"
                        },
                        {
                            title: "Business Effect",
                            content: "You can save time used to inquire suspended account directly on the Korea Financial Telecommunications and Clearings Institute's website"
                        },
                        {
                            title: "Used Technology",
                            content: "Microsoft Botframework(Azure Bot Channel Registration, Azure Language Understanding), MS Botbuilder(Python, Web Framework - Aiohttp)"
                        }
                    ],
                    arch: "check_transaction.png",
                    mp4: "check_transaction.mp4",
                }
            ]
        }
    },
    {
        key: 'sr',
        contents: {
            title: "Signals Repository",
            link: '/signals',
            thumbnail: 'https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg',
            desc: [
                "KPMG Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources. Structured and unstructured data is transformed into complex expressions, creating tens of thousands of signals when used by machine learning and other AI systems, and helps our clients significantly improve the accuracy in predictions.",
                'Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources.',
            ],
            descKo: [
                "KPMG Signal Repository는 공공 및 민간 자원으로부터 다양한 데이터를 지속적으로 수집하는 Active Listening 플랫폼입니다. 정형 데이터와 비정형 데이터를 변환하여 머신 러닝 및 기타 AI 시스템에서 사용할 때, 사용자가 정확한 예측을 할 수 있도록 지원합니다. "
            ],
            items: [
                {
                    name: 'Tourism Industry Analytics',
                    link: '/tourism',
                    desc: [
                        {
                            title: "Background",
                            content: "Due to restrictions imposed in March when the coronavirus started spreading rapidly around the world, international travel came to a screeching halt in April and May, resulting in international tourist arrivals that trailed last year’s total by almost 60 percent through the first five months of 2020.",
                        },
                        {
                            title: "Signals",
                            content: "Depending on when travel restrictions will be fully lifted, the World Tourism Organization expects international tourism receipts (i.e. spending by international tourists) to drop between $910 billion and $1.2 trillion this year, which would set the global tourism industry back by 20 years."
                        },
                        {
                            title: "Potential Risk Assessment",
                            content: "In Korea, tourism industry was also impacted according to the local news and media. KPMG Lighthouse Korea team thoroughly paid attention to these signals by utilizing KPMG Signals Repository."
                        },
                        {
                            title: 'Explanatory Data Analysis',
                            content: 'Finding signals is a critical task. Data driven decision making, KPMG performed explanatory data analysis (EDA) to see what data shows regarding covid19 impact towards tourism industry in Korea. We performed data engineering tasks to collect and ingest available data set in public.'
                        },
                        {
                            title: 'Signals',
                            content: 'We found that tourism industry was the one whose total average assets were decreased after covid19 affected. Starting from here, KPMG looked through how many tourists visited Korea in a month and noted significant number were decreased in a very short time'
                        },
                        {
                            title: 'Data Driven Search',
                            content: 'Understand how Covid19 has hurt your business and obtain and provide quality data for the companies that can help.'
                        },
                        {
                            title: 'Global Signals Monitoring',
                            content: 'In the global context, understanding the increase and decrease status of COVID 19 confirmed cases will be critical to the business. With its rich global network, KPMG first monitors the number of global coroners at near real-time intervals to collect signals. Data visualization is also important. Data visualization helps users intuitively understand the current situation. Furthermore, we are proactively monitoring domestic impact by identifying local covid19 confirmed cases and deaths.'
                        }
                    ],
                    arch: "tourism.png",
                    mp4: "tourism.mp4",
                },
                {
                    name: 'Financial Statement Analytics',
                    link: '/dart',
                    desc: [
                        {
                            title: "DART : Data Analysis, Retrieval and Transfer system",
                            content: "DART is the corporate information electronic disclosure system operated by the Financial Supervisory Service in Korea. There is a lot of information coming up from 50,000 companies. Various companies, ranging from stock firms listed on the KOSPI and KOSDAQ markets to unlisted companies, are making public announcements and disclosures about their companies' business and financial reporting.",
                        },
                        {
                            title: "Signals from Financial Reporting Disclosure",
                            content: "KPMG Lighthouse collects thousands of annual reports, quarterly reports, and semi-annual reports, etc published in DART and finds signals. These signals often provide financial, business, and risk management insights."
                        },
                    ],
                    arch: "dart.png",
                },
                {
                    name: 'Data Catalog',
                    link: '/data_catalog',
                    desc: [
                        {
                            title: "purpose",
                            content: "By collecting and processing data, new insights can be created through such things. It can also be used to create new businesses and industries in related areas."
                        },
                        {
                            title: "Business Effect",
                            content: "Data catalogs are associated with big data platforms, data stores and public data portals. It is possible to create a new service industry by trading and utilizing data.It can create effective synergy by providing customized information targeting the tastes of businesses and individuals."
                        },
                        {
                            title: "Used Technology",
                            content: "Data Engineering, R: Shiny Dashboard"
                        }
                    ],
                    arch: "dart.png",
                    mp4: "data_catalog.mp4",
                }
            ]

        }
    }
];

export const globalInsightsCenterData = {
    meta: {
        displayItemsId: 2021,
        link: 'https://home.kpmg/xx/en/home/insights.html',
        desc: 'Welcome to the KPMG knowledge base of research that demonstrates our understanding of complex business challenges faced by companies around the world',
        surveyContent: {
            title: 'KPMG CEO Outlook Pulse Survey',
            desc: 'Preparing for a new reality.',
            link: 'https://home.kpmg/xx/en/home/insights/2021/03/ceo-outlook-pulse.html',
        }
    },
    contents:
    {
        "2020": {
            items: [
                {
                    title: 'Data-driven client stories',
                    desc: 'Learn how KPMG member firms helped clients cultivate their data ecosystems.',
                    link: 'https://home.kpmg/xx/en/home/insights/2019/11/data-driven-client-stories.html'
                },
                {
                    title: 'Building confidence in your data',
                    desc: 'At KPMG, our approach to data-driven technologies is rooted in trust.',
                    link: 'https://home.kpmg/xx/en/home/insights/2018/07/trusted-analytics-for-confident-decisions.html',
                },
                {
                    title: 'Data-driven Technologies : Our capabilities',
                    desc: 'KPMG has developed robust technology solutions to help clients find value in data.',
                    link: 'https://home.kpmg/xx/en/home/insights/2018/07/our-capabilities.html',
                },
                {
                    title: 'Ready, set, fail?',
                    desc: 'Results from a 2017 KPMG LLP study',
                    link: 'https://home.kpmg/xx/en/home/insights/2018/08/ready-set-fail.html',
                },
            ]
        },
        "2021": {
            items: [
                {
                    title: 'KPMG IMPACT ',
                    desc: 'Global expertise building a more sustainable and resilient future.',
                    link: 'https://home.kpmg/xx/en/home/insights/2020/06/kpmg-impact.html'
                },
                {
                    title: 'Agile and resilient',
                    desc: 'Alternative investments embrace the new reality.',
                    link: 'https://home.kpmg/xx/en/home/insights/2020/09/agile-and-resilient-alternative-investments-embrace-the-new-reality.html',
                },
                {
                    title: 'Pulse of Fintech',
                    desc: 'Biannual analysis of global fintech investments.',
                    link: 'https://home.kpmg/xx/en/home/industries/financial-services/pulse-of-fintech.html',
                },
                {
                    title: 'Contextualizing "shovel-ready" in light of COVID-19',
                    desc: 'Infrastructure has been a reliable shoulder to lean on through the COVID-19 crisis. But what does it mean to be shovel-ready in this new reality.',
                    link: 'https://home.kpmg/xx/en/home/insights/2020/08/contextualizing-shovel-ready-in-light-of-covid-19.html',
                }
            ]
        },
    },


};
