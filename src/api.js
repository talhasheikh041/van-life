import { initializeApp } from "firebase/app"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDqpY5AhYxdPHKtPWWLsnoAxeWkmsw-jkA",
  authDomain: "vanlife-project-a5c31.firebaseapp.com",
  projectId: "vanlife-project-a5c31",
  storageBucket: "vanlife-project-a5c31.appspot.com",
  messagingSenderId: "338384122174",
  appId: "1:338384122174:web:1a0cd3aeba541ef2753c6f",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
  const vansSnapshot = await getDocs(vansCollectionRef)
  const dataArr = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
  }))
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)
  return vanSnapshot.data()
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const vansSnapshot = await getDocs(q)
  const dataArr = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
  }))
  return dataArr
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  })
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    }
  }

  return data
}

// Mirage Server Code

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : `/api/vans`
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : `/api/host/vans`
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }
