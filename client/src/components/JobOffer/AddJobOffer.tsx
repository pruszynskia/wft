import React, { useState } from 'react';
import { AddJobOfferStyles } from '../../styles/common';

import { useSelector, useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { SettingsPowerRounded } from '@material-ui/icons';

const initialFformData = {
    company: {
        name: "",
        size: "",
        address: {
          country: "",
          city: "",
          streat: ""
        },
        email: "",
        logo: "",
        creationDate: ""
      },
      position: {
        name: "",
        type: "",
        lvl: "",
        languageRequired: "",
        languageOptional: "",
        spokenLanguage: "",
        remote: "",
        contractType: "",
        salary: {
          min: "",
          max: ""
        },
        date: ""
    }
}


const AddJobOffer = ({setOpen}: any) => {
  
  const useStyles = AddJobOfferStyles();
  
  // Submit button - add job offer
  const dispatch = useDispatch();
  const data = useSelector((state: any) =>
  state)
  
  console.log("data", data)
  
  let [formData, setFormData] = useState(initialFformData);

  const [, updateState] = useState({});

  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleSubmit = (e: any) => {
      e.preventDefault()
      // console.log(formData)
      dispatch({
        type: "ADD_JOB_OFFER",
        payload: formData
      });
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        payload: {
            addJobOfferFilter: false
        }
    })
setOpen(false)
  }
    // console.log(formData)
  
    return (
      <div>
        <form id="transition-modal-title" className={useStyles.root}
        onSubmit={handleSubmit}
        >
            <h1>Form</h1>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Company Info</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Company Name"
                    value={formData.company.name}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              name: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Size"
                    value={formData.company.size}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              size: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Country"
                    value={formData.company.address.country}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              address: {
                                  ...formData.company.address,
                                  country: e.target.value
                                } 
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="City"
                    value={formData.company.address.city}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              address: {
                                  ...formData.company.address,
                                  city: e.target.value
                                } 
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Streat"
                    value={formData.company.address.streat}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              address: {
                                  ...formData.company.address,
                                  streat: e.target.value
                                } 
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Email"
                    value={formData.company.email}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              email: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Logo"
                    value={formData.company.logo}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              logo: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Creation date"
                    value={formData.company.creationDate}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          company: {
                              ...formData.company,
                              creationDate: e.target.value
                            },
                        })
                      }
                    />
                </CardContent>
            </Card>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Position Info</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Position Name"
                    value={formData.position.name}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              name: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Category"
                    value={formData.position.type}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              type: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Seniority level"
                    value={formData.position.lvl}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              lvl: e.target.value
                            },
                        })
                      }
                    />
                </CardContent>
            </Card>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Requirements</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Must-Have"
                    value={formData.position.languageRequired}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              languageRequired: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Nice-To-Have"
                    value={formData.position.languageOptional}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              languageOptional: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Language"
                    value={formData.position.spokenLanguage}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              spokenLanguage: e.target.value
                            },
                        })
                      }
                    />
                </CardContent>
            </Card>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Job description</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Remote"
                    value={formData.position.remote}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              remote: e.target.value
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Contract Type"
                    value={formData.position.contractType}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              contractType: e.target.value
                            },
                        })
                      }
                    />
                </CardContent>
            </Card>
            <Card  className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Salary</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Salary-Min"
                    value={formData.position.salary.min}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              salary: {
                                  ...formData.position.salary,
                                  min: e.target.value
                                } 
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Salary-Max"
                    value={formData.position.salary.max}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              salary: {
                                  ...formData.position.salary,
                                  max: e.target.value
                                } 
                            },
                        })
                      }
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Date"
                    value={formData.position.date}
                    onChange={(e: any) =>
                        setFormData({
                          ...formData,
                          position: {
                              ...formData.position,
                              date: e.target.value
                            },
                        })
                      }
                    />
                </CardContent>
            </Card>
            <div className={useStyles.containerRow}>
                <Button className={useStyles.button}
                type="submit"
                >
                    Submit
                </Button>
            </div>
        </form>
        </div>
    );
}

export default AddJobOffer;