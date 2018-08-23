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
let micropayPosStore = {
    "active_user": "user_v433133",
    "active_issuer": "issr_248110",
    "device": {
        "orientation": "landscape", // "portrait"
        "dimensions": {
            "height": 760,
            "width": 1024
        }
    },
    "location": {
        "country_code": "ng",
        "longitude": null,
        "latitude": null
    },
    "onboarding": {
        "is_terms_accepted": false,
        "is_privacy_policy_accepted": false,
        "show_walkthrough": true
    },
    "auth": {
        "pin_candidate": null,
        "pin_attempt_count": 1,
        "status": "pending",
        "is_os_auth_enabled": false,
        "is_pin_expired": false,
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
    "search": {
        "transaction": {
            "issuer": null,
            "span": "1",
            "from_date": null,
            "to_date": null
        }
    },
    "cart": {
        "items": [
            {
                "product": "prod_32bj29",
                "quantity": 1,
                "amount": 20000
            }
        ],
        "taxes": 0,
        "discounts": 0,
        "amount": 10000
    },
    "transactions": [
        {
            "otp": "AXV321C9",
            "cart": {
                "items": [
                    {
                        "product": "prod_bb345c",
                        "quantity": 1,
                        "amount": 5000
                    },
                    {
                        "product": "prod_84kd29",
                        "quantity": 2,
                        "amount": 20000
                    }
                ],
                "taxes": 0,
                "discounts": 0,
                "amount": 25000
            },
            "hash": "...",

            "tx_date": 21232323244,
            "status": null, //"pending", "success", "failed",
            "upload_date": null, //"pending", "success", "failed",
        }
    ],
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
                "updated_by": "bruce"
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
        "products": {
            "prod_32bj29": {
                "id": "prod_32bj29",
                "name": "BRT Charge",
                "amount": 100,
                "is_adjustable": true
            }
        },
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
            }
        }
    }
}