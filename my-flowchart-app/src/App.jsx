import React, { useState, useEffect } from 'react';
import { 
  User, Car, Building, Smartphone, Wrench, Gift, RefreshCw, 
  MessageSquare, Bell, Calendar, TrendingUp, Award, CreditCard,
  FileText, Settings, MapPin, Heart, Star, Shield, Database,
  BarChart, Phone, Mail, Video, Download, Upload, Clock,
  Users, Fuel, AlertTriangle // Added AlertTriangle icon
} from 'lucide-react';

// Realistic Journey Component with Fixed Overlapping
const BMWRealisticJourney = ({ currentStep, journeySteps }) => {
  const currentStepData = journeySteps[currentStep];

  const renderScene = () => {
    switch (currentStep) {
      // 0. Showroom Entry - UPDATED
      case 0:
        return (
          <div className="relative flex justify-around items-center w-full px-4">
            
            {/* UPDATED: Background Setting - Increased opacity and brighter colors */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50 flex flex-col items-center">
              
              {/* Building + Logo */}
              <div className="relative">
                {/* UPDATED: Brighter color */}
                <Building size={200} className="text-blue-400" />
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-400">
                  <span className="text-lg font-bold text-blue-600">BMW</span>
                </div>
              </div>

              {/* Cars Parked Outside with Names */}
              <div className="flex space-x-16 mt-4">
                <div className="flex flex-col items-center">
                  {/* UPDATED: Brighter color */}
                  <Car size={80} className="text-gray-400" />
                  {/* UPDATED: Brighter color and font */}
                  <p className="text-xs text-gray-300 font-bold">BMW M5</p>
                </div>
                <div className="flex flex-col items-center">
                  {/* UPDATED: Brighter color */}
                  <Car size={80} className="text-gray-400" />
                  {/* UPDATED: Brighter color and font */}
                  <p className="text-xs text-gray-300 font-bold">BMW M5</p>
                </div>
              </div>
            </div>

            {/* Foreground Actors */}
            
            {/* Customers (Arshad and Shubash) */}
            <div className="flex space-x-4 items-end animate-walk-in z-10" style={{animationDelay: '0s'}}>
              <div className="flex flex-col items-center">
                <User size={80} className="text-white" />
                <p className="mt-2 text-white text-sm">Arshad</p>
              </div>
              <div className="flex flex-col items-center">
                <User size={80} className="text-white" />
                <p className="mt-2 text-white text-sm">Shubash</p>
              </div>
            </div>

            {/* "Talking to" arrow */}
            <div className="text-gray-400 animate-fade-in z-10" style={{animationDelay: '1s'}}>
              <svg width="80" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H95" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse"/>
                <circle cx="95" cy="10" r="4" fill="currentColor" />
              </svg>
            </div>
            
            {/* "Sales Persons" (Plural) */}
            <div className="flex flex-col items-center animate-fade-in z-10" style={{animationDelay: '1.5s'}}>
              <Users size={80} className="text-blue-400" />
              <p className="mt-2 text-blue-300 text-sm">Sales Team</p>
              <FileText size={30} className="text-green-400 mt-2 animate-pulse" />
              <p className="text-green-300 text-xs">Capturing Details...</p>
            </div>
          </div>
        );
      
      // 1. Personalization
      case 1:
        return (
          <div className="flex justify-center items-center w-full px-4 space-x-8">
            {/* UPDATED: Two Customers */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <div className="flex space-x-2">
                <User size={70} className="text-white" />
                <User size={70} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">Arshad & Shubash</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Users size={80} className="text-blue-400" />
              <p className="mt-2 text-blue-300 text-sm">Sales Advisor</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1s'}}>
              <Smartphone size={100} className="text-purple-400" />
              <p className="mt-2 text-purple-300 font-bold text-sm">Digital Configurator</p>
              <Car size={30} className="text-white mt-2 animate-spin-slow" />
            </div>
          </div>
        );
      
      // 2. Purchase Decision
      case 2:
        return (
          <div className="flex justify-center items-center w-full px-4 space-x-12">
            {/* UPDATED: Two Customers */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <div className="flex space-x-2">
                <User size={70} className="text-white" />
                <User size={70} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">Arshad & Shubash</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <FileText size={70} className="text-yellow-400" />
              <p className="mt-2 text-yellow-300 text-sm">Financing Docs</p>
            </div>
            <div className="flex flex-col items-center animate-slide-in-right" style={{animationDelay: '1s'}}>
              <CreditCard size={70} className="text-green-400 animate-pulse" />
              <p className="mt-2 text-green-300 text-sm">Purchase Finalized</p>
            </div>
          </div>
        );
      
      // 3. Delivery Day
      case 3:
        return (
          <div className="flex justify-center items-center w-full px-4 space-x-8">
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <Users size={80} className="text-blue-400" />
              <p className="mt-2 text-blue-300 text-sm">Sales Advisor</p>
              <Award size={50} className="text-yellow-400 animate-bounce mt-2" />
            </div>
            {/* UPDATED: Two Customers */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex space-x-2">
                <User size={70} className="text-white" />
                <User size={70} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">Arshad & Shubash (New Owners!)</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1s'}}>
              <Car size={120} className="text-white" />
              <p className="mt-2 text-white font-bold text-sm">BMW M5</p>
            </div>
          </div>
        );
      
      // 4. ConnectedDrive (Driving)
      case 4:
      case 5:
        return (
          <div className="flex justify-around items-center w-full px-4 relative">
            {/* Animated Road */}
            <div className="absolute bottom-10 w-full h-2 bg-gray-600"></div>
            <div 
              className="absolute bottom-10 w-full h-2"
              style={{
                background: 'repeating-linear-gradient(to right, #facc15 0, #facc15 20px, transparent 20px, transparent 40px)',
                backgroundSize: '40px 100%',
                animation: 'road-lines 0.5s linear infinite'
              }}
            ></div>
            
            {/* UPDATED: Two Cars Driving */}
            <div className="relative flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <div className="flex space-x-8">
                {/* Car 1 */}
                <div className="relative flex flex-col items-center">
                  <Car size={100} className="text-white animate-rumble" />
                  <p className="mt-2 text-white font-bold text-xs">M5 (Arshad)</p>
                  
                  {/* UPDATED: Tire pressure indication for step 5 on Car 1 (Arshad) */}
                  {currentStep === 5 && (
                    <div className="absolute -top-4 -right-4 flex flex-col items-center animate-pulse">
                      <AlertTriangle size={36} className="text-orange-400" />
                      <p className="text-orange-300 text-xs font-bold">TIRE</p>
                    </div>
                  )}
                </div>
                {/* Car 2 */}
                <div className="relative flex flex-col items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Car size={100} className="text-white animate-rumble" />
                  <p className="mt-2 text-white font-bold text-xs">M5 (Shubash)</p>

                  {/* UPDATED: Fuel indication for step 5 on Car 2 (Shubash) */}
                  {currentStep === 5 && (
                    <div className="absolute -top-4 -right-4 flex flex-col items-center animate-pulse">
                      <Fuel size={40} className="text-red-500" />
                      <p className="text-red-400 text-xs font-bold">LOW</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Smartphone size={70} className="text-cyan-400" />
              <p className="text-cyan-300 text-sm">My BMW App</p>
              <Database size={30} className="text-green-400 animate-pulse mt-2" />
              <p className="text-green-300 text-xs">Syncing Data...</p>
            </div>
            
            {/* UPDATED: Show notifications from step 5 */}
            {currentStep === 5 && (
              <div className="absolute top-4 right-4 z-30 flex flex-col space-y-3">
                
                {/* Notification 1: Fuel (Subash) */}
                <div className="bg-white rounded-2xl p-3 shadow-2xl border-2 border-red-400 animate-slide-in max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-xs">BMW</span>
                    </div>
                    <div>
                      {/* UPDATED: Added name as requested */}
                      <p className="font-bold text-gray-800 text-xs">My BMW App - Subash</p>
                      <p className="text-xs text-gray-600">Just now</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">⛽ Fuel Alert</p>
                  {/* UPDATED: Made text specific */}
                  <p className="text-xs text-gray-600">Subash's M5's fuel is below 20%. Nearest BMW fuel partners are shown in-app.</p>
                </div>
                
                {/* Notification 2: Tire Pressure (Arshad) */}
                <div className="bg-white rounded-2xl p-3 shadow-2xl border-2 border-orange-400 animate-slide-in max-w-xs" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-xs">BMW</span>
                    </div>
                    <div>
                      {/* UPDATED: Added name as requested */}
                      <p className="font-bold text-gray-800 text-xs">My BMW App - Arshad</p>
                      <p className="text-xs text-gray-600">Just now</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">⚠️ Tire Pressure Alert</p>
                  {/* This text was already correct per user's example */}
                  <p className="text-xs text-gray-600">Arshad's M5: Front-left tire pressure is low (28 PSI). Please check.</p>
                </div>

              </div>
            )}
          </div>
        );
      
      // 6. Service Booking
      case 6:
        return (
          <div className="flex justify-center items-center w-full px-4 space-x-6">
            {/* UPDATED: Two Customers */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <div className="flex space-x-2">
                <User size={70} className="text-white" />
                <User size={70} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">Arshad & Shubash</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Smartphone size={100} className="text-cyan-400" />
              <p className="mt-2 text-cyan-300 text-sm">My BMW App</p>
            </div>
            
            <div className="text-gray-400 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <svg width="60" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H95" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse"/>
                <circle cx="95" cy="10" r="4" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Calendar size={90} className="text-red-400 animate-pulse" />
              <p className="mt-2 text-red-300 text-sm">Service Booked</p>
            </div>
          </div>
        );
      
      // 7. Workshop
      case 7:
        return (
          <div className="flex justify-around items-center w-full px-4">
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <Building size={100} className="text-indigo-300" />
              <p className="mt-2 text-white font-bold text-sm">BMW Service Center</p>
            </div>
            {/* UPDATED: Two Cars */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex space-x-8">
                 <Car size={100} className="text-white" />
                 <Car size={100} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">M5s in for service</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1s'}}>
              <Users size={80} className="text-blue-400" />
              <p className="mt-2 text-blue-300 text-sm">BMW Technician</p>
              <Wrench size={30} className="text-indigo-400 mt-2 animate-tap" />
            </div>
          </div>
        );
      
      // 8. Nurturing
      case 8:
        return (
          <div className="flex justify-center items-center w-full px-4 space-x-12">
            {/* UPDATED: Two Customers */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <div className="flex space-x-2">
                <User size={70} className="text-white" />
                <User size={70} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">Arshad & Shubash</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Gift size={90} className="text-pink-400 animate-bounce" />
              <p className="mt-2 text-pink-300 text-sm">Track Day Invite!</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1s'}}>
              <Mail size={90} className="text-purple-400" />
              <p className="mt-2 text-purple-300 text-sm">Personalized Offers</p>
            </div>
          </div>
        );
      
      // 9. Loyalty / 10. Repurchase
      case 9:
      case 10:
        return (
          // UPDATED: Restructured layout for two cars
          <div className="flex justify-center items-center w-full px-4 space-x-6">
            {/* Customers */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0s'}}>
              <div className="flex space-x-2">
                <User size={70} className="text-white" />
                <User size={70} className="text-white" />
              </div>
              <p className="mt-2 text-white text-sm">Arshad & Shubash</p>
            </div>
            
            {/* Current Cars */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex space-x-4">
                <Car size={80} className="text-white opacity-50" />
                <Car size={80} className="text-white opacity-50" />
              </div>
              <p className="mt-2 text-gray-400 text-sm">Current M5s</p>
            </div>
            
            {/* Manager */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1s'}}>
              <Users size={80} className="text-blue-400" />
              <p className="mt-2 text-blue-300 text-sm">Loyalty Manager</p>
              <RefreshCw size={30} className="text-teal-400 mt-2 animate-spin" />
            </div>

            {/* New Cars */}
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '1.5s'}}>
              <div className="flex space-x-4">
                <Car size={80} className="text-green-400" />
                <Car size={80} className="text-green-400" />
              </div>
              <p className="mt-2 text-green-300 text-sm">New M5 CS's!</p>
            </div>
          </div>
        );
      
      default:
        return <div className="text-white">Loading Scene...</div>;
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-500 mb-6" style={{ height: '520px' }}>
      {/* Thought Bubble */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-700 w-full max-w-md px-4">
        <div className="relative animate-bounce">
          <div className="bg-white border-4 border-blue-400 rounded-3xl px-6 py-3 shadow-2xl">
            <div className="flex items-center mb-2">
              <User size={18} className="text-blue-600 mr-2" />
              <p className="text-xs font-semibold text-blue-600">Customer Thought</p>
            </div>
            <p className="text-base font-bold text-gray-800 text-center">
              {currentStepData.thought}
            </p>
          </div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-400"></div>
        </div>
      </div>
      
      {/* Scene Area - Fixed positioning with proper spacing */}
      <div className="absolute top-40 left-0 w-full h-64 flex items-center justify-center">
        {renderScene()}
      </div>

      {/* Action Label - Fixed at bottom with no overlap */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-2.5 rounded-full shadow-xl border-2 border-yellow-600 z-30 max-w-2xl">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg">🎬</span>
          <p className="text-sm md:text-base font-bold text-gray-900 text-center leading-tight">
            {currentStepData.action}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const BMWJourneyAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  // UPDATED: All "thought" properties are now plural
  const journeySteps = [
    {
      stage: "🏢 Showroom Entry - Lead Capture",
      thought: "We've been dreaming about the BMW M5 - let us check it out at the showroom",
      action: "Walking into BMW authorized dealership",
      description: "Sales Advisor greets and captures details in BMW CRM (Salesforce)",
      icon: Building,
      color: "bg-blue-600",
      position: 2, 
      crmActivity: [
        "Personal details logged: Name, Contact, Preferences",
        "Car interest: BMW M5 Competition",
        "Source: Walk-in (Tracked in CRM)",
        "Sales Advisor: Michael assigned automatically",
        "Initial lead score: 85/100 (Hot Lead)"
      ],
      touchpoints: ["Physical Showroom", "Sales Advisor", "CRM Entry"],
      dataPoints: ["Customer Profile", "Vehicle Interest", "Lead Source"]
    },
    {
      stage: "🎯 Experience & Personalization",
      thought: "The M5 looks incredible! Let us customize our dream configuration",
      action: "Using BMW Digital Configurator with Sales Advisor",
      description: "Personalized configuration: Tanzanite Blue II, Fiona Red/Black Full Merino",
      icon: Car, 
      color: "bg-purple-600",
      position: 12,
      crmActivity: [
        "Digital configurator session: 45 minutes",
        "Configuration saved: M5 Competition xDrive",
        "Automated follow-up email sent with brochure",
        "Test drive scheduled for tomorrow 2:00 PM",
        "Lead score updated: 92/100 (Very Hot)"
      ],
      touchpoints: ["Digital Configurator", "Test Drive", "Follow-up Email"],
      dataPoints: ["Configuration Preferences", "Engagement Time", "Test Drive Interest"]
    },
    {
      stage: "🤝 Purchase Decision & Financing",
      thought: "This is perfect! Let us finalize the purchase with financing options",
      action: "Reviewing financing and finalizing M5 purchase",
      description: "CRM moves lead to 'Customer' segment, triggers welcome workflow",
      icon: CreditCard,
      color: "bg-green-600",
      position: 22,
      crmActivity: [
        "Purchase confirmed: BMW M5 Competition",
        "VIN assigned: WBS43AY06NFJ12345",
        "BMW Financial Services: Loan approved",
        "Insurance coordinated with BMW Insurance",
        "Delivery scheduled: Next Friday 10:00 AM"
      ],
      touchpoints: ["BMW Financial", "Insurance Partner", "Delivery Scheduling"],
      dataPoints: ["Purchase Details", "Financial Terms", "Delivery Date"]
    },
    {
      stage: "🎉 Delivery Day Experience",
      thought: "Today's the day! We're finally getting our dream M5",
      action: "BMW Delivery Specialist handing over keys and demonstrating features",
      description: "Complete vehicle handover with personalized orientation",
      icon: Award,
      color: "bg-yellow-600",
      position: 32,
      crmActivity: [
        "Delivery completion recorded in CRM",
        "BMW ID created and linked to vehicle",
        "My BMW App installed and configured",
        "ConnectedDrive services activated",
        "Satisfaction survey triggered (48 hours post-delivery)"
      ],
      touchpoints: ["Delivery Specialist", "My BMW App", "ConnectedDrive"],
      dataPoints: ["Delivery Confirmation", "Digital Integration", "Customer Satisfaction"]
    },
    {
      stage: "📱 ConnectedDrive Integration",
      thought: "Our car is connected! Getting real-time updates on our phones",
      action: "Vehicle syncing with BMW Cloud via ConnectedDrive",
      description: "Telematics data flowing to BMW backend systems",
      icon: Smartphone,
      color: "bg-cyan-600",
      position: 42,
      crmActivity: [
        "Vehicle telematics: Active and transmitting",
        "Fuel level: 95% (Range: 280 miles)",
        "Tire pressure: All systems normal",
        "First trip logged: 15 miles from dealership",
        "Driving style analysis: Balanced"
      ],
      touchpoints: ["ConnectedDrive", "My BMW App", "BMW Cloud"],
      dataPoints: ["Telematics Data", "Vehicle Health", "Usage Patterns"]
    },
    {
      stage: "🔔 Real-time Proactive Notifications",
      thought: "Just got a fuel alert and service reminder - so convenient!",
      action: "Receiving personalized notifications via My BMW App",
      description: "CRM analyzes telematics data to send relevant alerts",
      icon: Bell,
      color: "bg-orange-600",
      position: 52,
      crmActivity: [
        "Notification: Fuel at 20% - nearest Shell station suggested",
        "Maintenance: First service due in 1,200 miles",
        "Tire pressure: All within optimal range",
        "Battery: 100% health, no issues detected",
        "Software: Update available for iDrive 8.5"
      ],
      touchpoints: ["Push Notifications", "Email Alerts", "In-app Messages"],
      dataPoints: ["Alert Triggers", "Customer Response", "Service Scheduling"]
    },
    {
      stage: "🛠️ Predictive Service Booking",
      thought: "Our car knows it needs service before we do - time to book",
      action: "One-touch service booking through My BMW App",
      description: "CRM automatically suggests optimal service timing",
      icon: Calendar,
      color: "bg-red-600",
      position: 62,
      crmActivity: [
        "Service request: Oil change and inspection",
        "Automated slot: Next Tuesday 9:00 AM confirmed",
        "Technician: Senior BMW Certified assigned",
        "Loaner car: BMW 330i reserved",
        "SMS reminders: 24h and 2h before appointment"
      ],
      touchpoints: ["Service Booking", "Loaner Coordination", "Reminder System"],
      dataPoints: ["Service History", "Technician Allocation", "Customer Preferences"]
    },
    {
      stage: "⚙️ Workshop & Predictive Maintenance",
      thought: "Dropping off our M5 - they already know what needs attention",
      action: "Vehicle at BMW Service Center for scheduled maintenance",
      description: "Predictive maintenance using historical and real-time data",
      icon: Wrench,
      color: "bg-indigo-600",
      position: 72,
      crmActivity: [
        "Service started: All systems diagnostic running",
        "Predictive alert: Brake pads at 45% - replacement recommended",
        "Software update: iDrive 8.5 installed successfully",
        "Quality check: All parameters within BMW standards",
        "Post-service survey: Ready for delivery completion"
      ],
      touchpoints: ["Service Center", "Quality Control", "Customer Communication"],
      dataPoints: ["Maintenance Records", "Predictive Analytics", "Quality Metrics"]
    },
    {
      stage: "💝 Relationship Nurturing & Events",
      thought: "BMW invited us to an M Driving Experience - amazing!",
      action: "Receiving personalized invitations and exclusive offers",
      description: "CRM-driven engagement based on ownership behavior and preferences",
      icon: Gift,
      color: "bg-pink-600",
      position: 82,
      crmActivity: [
        "Event invitation: BMW M Track Day at Laguna Seca",
        "Personalized offer: M Performance parts discount",
        "Seasonal check-up: Complimentary winter preparation",
        "Birthday surprise: BMW Lifestyle voucher sent",
        "Community: Local BMW Club membership offered"
      ],
      touchpoints: ["Event Management", "Personalized Marketing", "Community Building"],
      dataPoints: ["Engagement Level", "Event Participation", "Loyalty Indicators"]
    },
    {
      stage: "🔄 Loyalty & Trade-In Optimization",
      thought: "Our lease is ending soon - great trade-in offer for the new M5 CS",
      action: "Exploring upgrade options with BMW Loyalty Manager",
      description: "CRM identifies optimal timing for retention and upgrade",
      icon: RefreshCw,
      color: "bg-teal-600",
      position: 92,
      crmActivity: [
        "Lease maturity: 3 months remaining identified",
        "Upgrade offer: 2024 M5 CS with loyalty discount",
        "Trade-in value: $68,500 (Excellent condition)",
        "Financing: Pre-approved for upgrade",
        "Retention campaign: Exclusive owner benefits applied"
      ],
      touchpoints: ["Loyalty Manager", "Upgrade Program", "Financial Services"],
      dataPoints: ["Ownership Cycle", "Upgrade Propensity", "Loyalty Score"]
    },
    {
      stage: "🚀 Repurchase & Lifecycle Management",
      thought: "The journey continues - upgrading to the new M5 CS seamlessly",
      action: "Complete customer lifecycle visible for personalized service",
      description: "Full history enables seamless transition to next vehicle",
      icon: TrendingUp,
      color: "bg-emerald-600",
      position: 98, 
      crmActivity: [
        "New vehicle: 2024 BMW M5 CS configured",
        "History transferred: All preferences and settings",
        "Delivery: Scheduled with premium handover experience",
        "Loyalty tier: BMW Elite status maintained",
        "Next cycle: Added to M8 interest list for future"
      ],
      touchpoints: ["Lifecycle Management", "Preference Transfer", "Future Planning"],
      dataPoints: ["Customer Lifetime Value", "Brand Loyalty", "Future Potential"]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % journeySteps.length;
        if ([4, 5, 6].includes(nextStep)) {
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 2000);
        }
        return nextStep;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStepData = journeySteps[currentStep];

  const getCurrentPhase = () => {
    if (currentStep <= 2) return { name: "Pre-Purchase", color: "bg-blue-500", desc: "Lead to Customer Conversion" };
    if (currentStep <= 7) return { name: "Ownership Experience", color: "bg-green-500", desc: "Active Vehicle Ownership" };
    return { name: "Loyalty & Retention", color: "bg-purple-500", desc: "Long-term Relationship Building" };
  };

  const currentPhase = getCurrentPhase();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl mr-4">
              <span className="text-xl font-bold text-blue-600">BMW</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Customer Journey
            </h1>
          </div>
          <p className="text-xl text-blue-300 mb-2">Powered by BMW CRM & ConnectedDrive Ecosystem</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-blue-400">
            <span>🏢 Lead Capture</span>
            <span>→</span>
            <span>🚗 Ownership</span>
            <span>→</span>
            <span>💝 Loyalty</span>
            <span>→</span>
            <span>🔄 Repurchase</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg flex items-center"
          >
            {isPlaying ? '⏸ Pause Animation' : '▶ Play Animation'}
          </button>
          <button
            onClick={() => setCurrentStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-semibold shadow-lg flex items-center"
          >
            ← Previous Step
          </button>
          <button
            onClick={() => setCurrentStep((prev) => (prev + 1) % journeySteps.length)}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-semibold shadow-lg flex items-center"
          >
            Next Step →
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-semibold shadow-lg flex items-center"
          >
            ↺ Restart Journey
          </button>
        </div>

        <div className={`${currentPhase.color} text-white p-4 rounded-lg mb-6 shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Current Phase: {currentPhase.name}</h3>
              <p className="text-blue-100">{currentPhase.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Step {currentStep + 1} of {journeySteps.length}</p>
              <p className="text-xs opacity-90">{Math.round(((currentStep + 1) / journeySteps.length) * 100)}% Complete</p>
            </div>
          </div>
        </div>

        {/* NEW ANIMATED VIDEO */}
        <BMWRealisticJourney currentStep={currentStep} journeySteps={journeySteps} />

        {/* JOURNEY OVERVIEW MAP */}
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-500 mb-6" style={{height: '300px'}}>
          <h3 className="text-center text-white text-xl font-bold mt-4">Journey Overview Map</h3>
          <div className="absolute top-1/2 left-4 right-4 h-3 bg-slate-700 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000"
              style={{width: `${(currentStep / (journeySteps.length - 1)) * 100}%`}}
            ></div>
            
            <div className="absolute -top-8 left-0 w-1/3 text-center">
              <span className="text-xs text-blue-300 mt-1">Pre-Purchase</span>
            </div>
            <div className="absolute -top-8 left-1/3 transform -translate-x-1/2 w-1/3 text-center">
              <span className="text-xs text-green-300 mt-1">Ownership</span>
            </div>
            <div className="absolute -top-8 right-0 w-1/3 text-center">
              <span className="text-xs text-purple-300 mt-1">Loyalty</span>
            </div>

            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10"
                  style={{ left: `${step.position}%` }}
                  onClick={() => setCurrentStep(index)} 
                >
                  <div 
                    className={`w-10 h-10 rounded-full ${isActive ? step.color + ' animate-pulse' : 'bg-slate-600'} flex items-center justify-center border-4 ${isActive ? 'border-white' : 'border-slate-800'} transition-all duration-500`}
                    title={step.stage}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 text-center" style={{ left: '2%' }}>
              <Building size={64} className="text-slate-700 opacity-50" />
              <p className="text-slate-500 text-xs mt-1">Showroom</p>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 text-center" style={{ left: '72%' }}>
              <Building size={64} className="text-slate-700 opacity-50" />
              <p className="text-slate-500 text-xs mt-1">Service Center</p>
          </div>

          <div
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-1000 z-20"
            style={{ left: `${currentStepData.position}%` }}
          >
            {(() => {
              const MovingIcon = currentStep <= 2 ? User : Car;
              const iconColor = 'bg-blue-600'; 
              const pulseColor = 'bg-blue-500';

              return (
                <div className="relative">
                  <div className={`${iconColor} p-3 rounded-full shadow-2xl border-4 border-white z-10 relative`}>
                    <MovingIcon size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-full ${pulseColor} rounded-full animate-ping opacity-75`}></div>
                </div>
              );
            })()}
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-2xl shadow-2xl border-2 border-white max-w-2xl z-10">
            <p className="text-lg font-bold text-white text-center">
              {currentStep + 1}. {currentStepData.stage}
            </p>
          </div>
        </div>


        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-2 border-blue-500">
            <div className="flex items-center mb-4">
              <Database className="text-blue-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-white">CRM Activities & Automation</h3>
                <p className="text-blue-300 text-sm">Real-time system actions</p>
              </div>
            </div>
            <ul className="space-y-3">
              {currentStepData.crmActivity.map((activity, idx) => (
                <li key={idx} className="flex items-start text-blue-200 animate-fade-in">
                  <span className="text-green-400 mr-2 text-lg mt-0.5">✓</span>
                  <span className="text-sm leading-relaxed">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-2 border-purple-500">
            <div className="flex items-center mb-4">
              <BarChart className="text-purple-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-white">Customer Touchpoints</h3>
                <p className="text-purple-300 text-sm">Multi-channel engagement</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-300 mb-2">Active Channels:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentStepData.touchpoints.map((touchpoint, idx) => (
                    <span key={idx} className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-xs">
                      {touchpoint}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-green-300 mb-2">Data Collected:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentStepData.dataPoints.map((point, idx) => (
                    <span key={idx} className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-xs">
                      📊 {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-2 border-green-500">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-green-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-white">Journey Analytics</h3>
                <p className="text-green-300 text-sm">Performance metrics</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-green-400 font-bold text-2xl">92%</p>
                  <p className="text-green-200 text-xs">Satisfaction Score</p>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-blue-400 font-bold text-2xl">45%</p>
                  <p className="text-blue-200 text-xs">Upsell Potential</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Customer Value:</h4>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-300">Current Value</span>
                    <span className="text-white">$85,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-300">Lifetime Potential</span>
                    <span className="text-white">$450,0g00+</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-700">
                <h4 className="font-semibold text-yellow-300 mb-2">Next Best Action:</h4>
                <p className="text-yellow-200 text-sm">
                  {currentStep < journeySteps.length - 1 
                    ? journeySteps[currentStep + 1].action 
                    : "Begin new customer lifecycle"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-2 border-cyan-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Customer Journey Progress</h3>
          <div className="space-y-4">
            <div className="bg-slate-700 rounded-full h-6 overflow-hidden shadow-lg border-2 border-slate-600">
              <div 
                className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 h-full transition-all duration-1000 flex items-center justify-end pr-4 relative"
                style={{width: `${((currentStep + 1) / journeySteps.length) * 100}%`}}
              >
                <span className="text-white text-sm font-bold">
                  {Math.round(((currentStep + 1) / journeySteps.length) * 100)}% Complete
                </span>
                
                <div className="absolute left-1/3 transform -translate-x-1/2 -top-1">
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                </div>
                <div className="absolute left-2/3 transform -translate-x-1/2 -top-1">
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-green-500"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-slate-300 px-2">
              <span>Pre-Purchase</span>
              <span>Ownership</span>
              <span>Loyalty</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-blue-500">
            <div className="flex items-center mb-2">
              <User className="text-blue-400 mr-2" size={16} />
              <h4 className="font-bold text-blue-300">Customer Journey</h4>
            </div>
            <p className="text-slate-400 text-xs">Real-time progression through BMW ownership lifecycle</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-purple-500">
            <div className="flex items-center mb-2">
              <Database className="text-purple-400 mr-2" size={16} />
              <h4 className="font-bold text-purple-300">CRM Automation</h4>
            </div>
            <p className="text-slate-400 text-xs">Salesforce-powered workflows and data management</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-green-500">
            <div className="flex items-center mb-2">
              <Smartphone className="text-green-400 mr-2" size={16} />
              <h4 className="font-bold text-green-300">ConnectedDrive</h4>
            </div>
            <p className="text-slate-400 text-xs">Real-time vehicle data and proactive notifications</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-yellow-500">
            <div className="flex items-center mb-2">
              <TrendingUp className="text-yellow-400 mr-2" size={16} />
              <h4 className="font-bold text-yellow-300">Analytics</h4>
            </div>
            <p className="text-slate-400 text-xs">Data-driven insights and customer value tracking</p>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-in {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes walk-in {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rumble {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          @keyframes road-lines {
            from { background-position: 0 0; }
            to { background-position: -40px 0; }
          }
          @keyframes tap {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(10deg); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .animate-slide-in {
            animation: slide-in 0.5s ease-out;
          }
          .animate-walk-in {
            animation: walk-in 1s ease-out forwards;
          }
          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out forwards;
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
          .animate-rumble {
            animation: rumble 0.2s linear infinite;
          }
          .animate-tap {
            animation: tap 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BMWJourneyAnimation;