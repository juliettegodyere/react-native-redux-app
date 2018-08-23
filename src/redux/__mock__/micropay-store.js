const API_BASE_URL = "https://usemicropay.io/api/v1";
const Endpoints = {
    auth: {
        login: `${API_BASE_URL}/auth/login`,
        logout: `${API_BASE_URL}/auth/logout`,
        register: `${API_BASE_URL}/auth/register`,
        forgot: `${API_BASE_URL}/auth/register`,
        update_password: `${API_BASE_URL}/auth/update-password`
    }
}
const Constants = {
    ACTIVATION_CODE_LENGTH: 6,
    PIN_ATTEMPT_MAX: 5
}

let micropayStore = {
    "active_user": "user_v433133",
    "app": {
        "warning": null,
        "error": null
    },
    "layout": {
        "orientation": "portrait", // "landscape"
        "height": 640,
        "width": 300
    },
    "location": {
        "watch_id": null,
        "country_code": "ng",
        "longitude": null,
        "latitude": null
    },
    "onboarding": {
        "legal_acceptance_date": null,
        "walktrough_index": 0,
        "enrollee": {
            "country_code": "ng",
            "mobile_phone_number": "802123456",
            "name": null
        },
        "invitation": {
            "type": null, //"sms", "voice"
            "status": null //"pending", "success", "failed", "forbidden"
        },
        "activation": {
            "code": null,
            "status": null, //"pending", "success", "failed",
        }
    },
    "auth": {
        "pin_candidate": null,
        "pin_attempt_count": 1,
        "status": "pending",
        "is_os_auth_enabled": false,
        "is_pin_expired": false
    },
    "reactivation": {
        "questions": [
            {
                "message": "Please confirm the date on which you bought your most recent voucher",
                "response_type": "date", // "number", "date", "checkbox"
                "options": null
            },
            {
                "message": "Please confirm the total value of the credit you spent in your three transactions",
                "response_type": "number", // "number", "date", "checkbox"
                "options": null
            },
            {
                "message": "Please select the merchants with whom you have a balance of at least N500",
                "response_type": "checkbox", // "number", "date", ""
                "options": {
                    "issr_4dm40v": {
                        "id": "issr_4dm40v",
                        "name": "ABC Transport Limited",
                        "icon_url": "https://cdn.usemicropay.com/images/merchants/abc-logo-293232382323323.jpg"
                    },
                    "issr_bf23fm": {
                        "id": "issr_bf23fm",
                        "name": "Ikeja Mall Car Park",
                        "icon_url": "https://cdn.usemicropay.com/images/merchants/ikeja-mall-logo-937133716202051.jpg"
                    },
                    "issr_92dk14": {
                        "id": "issr_92dk14",
                        "name": "Lekki Concession Company",
                        "icon_url": "https://cdn.usemicropay.com/images/merchants/lcc-logo-723971053110371.jpg"
                    },
                }
            }
        ],
        "step": 0,
        "status": null, //"pending", "success", "failed",
    },
    "secrets": {
        "new_pin": null,
        "new_pin_confirmation": null,
        "pin": null,
        "api_token": null,
        "micros": {
            "issr_248110": ["...", "..."]
        }
    },
    "invitations": {
        "contacts": [],
        "status": null //"pending", "success", "failed",
    },
    "forms": {
        "free_credit": {
            "referrer_country_code": null,
            "referrer_mobile_phone_number": null,
            "first_name": null,
            "last_name": null,
            "gender": null,
            "age": null,
            "status": null, //"pending", "success", "failed",
            "status_message": null
        }
    },
    "search": {
        "voucher": {
            "type": null, // "category", "keyword", "issuer"
            "keyword": null, // "tolls", Chicken Republic", "issr_248110"
            "status": null, // "pending", "success", "failed"
            "results": ["vchr_248110", "vchr_b920ce", "vchr_t9c2vd"]
        },
        "transaction": {
            "issuer": null,
            "span": "1",
            "from_date": null,
            "to_date": null,
            "x": 0
        }
    },
    "pay": {
        "balance": "bal_248110",
        "otp_expiration_timer": 60000,
        "status": "success", //"pending", "success", "failed"
    },
    "topup": {
        "voucher": "vchr_248110",
        "free_credits": 50000,
        "method": "card", //"card", "bank", "ussd"
        "status": null // "pending", "success", "failed"
    },
    "entities": {
        "realms": {
            "rlm_9303812": {
                "id": "rlm_9303812",
                "object": "realm",
                "linked_user": {
                    "id": "user_v433133"
                },
                "name": "Micropay",
                "code": "micropay",
                "domain": "usemicropay.com",
                "cdn_domain": "cdn.usemicropay.com",
                "api_version": "2018-07-28",
                "timezone": "UTC+0",
                "currency": "USD",
                "icon_url": "https://cdn.usemicropay.com/9303812/2018-02-13/302f-2301-ca31-98v1-82n3.jpg",
                "logo_url": "https://cdn.usemicropay.com/9303812/2018-02-12/302f-2301-ca31-98v1-82n3.jpg",
                "created_time": 1532770242,
                "updated_time": null
            }
        },
        "users": {
            "user_v433133": {
                "id": "user_v433133",
                "object": "user",
                "username": "2348021234567",
                "password": null,
                "name": "Jon Doe",
                "status": "verified", // "pending", "unverified", "verified"
                "created_time": 1532770242,
                "updated_time": 1532770242,
                "updated_by": "bruce",
                "x": 0
            }
        },
        "issuers": {
            "issr_248110": {
                "id": "issr_248110",
                "object": "issuer",
                "linked_user": {
                    "id": "user_v433133"
                },
                "name": "Food Concepts Limited",
                "category": "food_drink",
                "logo_url": "https://cdn.usemicropay.com/9303812/2018-02-12/302f-2301-ca31-98v1-82n3.jpg",
                "description": "You can use this credit at any of our brand stores nationwide i.e. Chicken Republic, Butterfield Bakery, St. Elmo's Pizza, and Reeds Thai Restaurant.\nThis credit is valid only in Nigeria."
            }
        },
        "vouchers": {
            "vchr_248110": {
                "id": "vchr_248110",
                "object": "voucher",
                "linked_user": {
                    "id": "user_v433133",
                    "name": "Jon Doe"
                },
                "linked_issuer": {
                    "id": "issr_248110",
                    "name": "Food Concepts Limited"
                },
                "amount": 500000,
                "discount": 10000,
                "discount_type": "absolute",
                "x": 0
            }
        },
        "free_credits": {
            "user_v433133": 245000
        },
        "balances": {
            "bal_248110": {
                "id": "bal_248110",
                "object": "balance",
                "linked_user": {
                    "id": "user_v433133",
                    "name": "Jon Doe"
                },
                "linked_issuer": {
                    "id": "issr_248110",
                    "name": "Food Concepts Limited"
                },
                "balance": 500000,
                "created_time": 1532770242,
                "updated_time": 1532778938,
            }
        },
        "transactions": [],
        "models": {
            "international_dialing_codes": {
                "ng": {
                    "key": "+234",
                    "name": "Nigeria"
                },
                "us": {
                    "key": "+1",
                    "name": "United States"
                },
                "gb": {
                    "key": "+44",
                    "name": "United Kingdom"
                }
            },
            "voucher_categories": {
                "tolls": {
                    "key": "tolls",
                    "name": "Tolls",
                    "fa-icon": "fa-car"
                },
                "fooddrink": {
                    "key": "fooddrink",
                    "name": "Food & Drink",
                    "fa-icon": "fa-dish"
                }
            }
        }
    }
}