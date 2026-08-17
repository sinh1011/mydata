import { useState, useMemo, useRef, useEffect } from 'react'
import { MOCK_CITIES } from './mockWeatherData'
import styles from './App.module.css'

// Helper function loại bỏ dấu tiếng Việt để tìm kiếm thông minh hơn
function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
}

// Biểu tượng thời tiết SVG tùy chỉnh cao cấp
function WeatherIcon({ condition, size = 32, className = '' }) {
  switch (condition) {
    case 'sunny':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="4" fill="#fbbf24" fillOpacity="0.2" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    case 'partly-cloudy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41" stroke="#f59e0b" />
          <circle cx="12" cy="9" r="3" stroke="#f59e0b" fill="#fbbf24" fillOpacity="0.3" />
          <path
            d="M17.5 19H9a5 5 0 1 1 1-9.9 4 4 0 0 1 7.5 1.9 3.5 3.5 0 0 1 0 8z"
            fill="#e2e8f0"
            stroke="#94a3b8"
          />
        </svg>
      )
    case 'cloudy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path
            d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
            fill="#e2e8f0"
            fillOpacity="0.4"
          />
        </svg>
      )
    case 'rainy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path
            d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
            stroke="#94a3b8"
          />
          <line x1="8" y1="19" x2="8" y2="22" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="12" y1="17" x2="12" y2="20" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="16" y1="19" x2="16" y2="22" stroke="#38bdf8" strokeWidth="2.5" />
        </svg>
      )
    case 'thunderstorm':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path
            d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
            stroke="#64748b"
          />
          <polygon
            points="13 11 9 17 14 17 11 23 18 15 13 15 15 11"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="1.5"
          />
        </svg>
      )
    case 'foggy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="4" y1="16" x2="20" y2="16" />
          <line x1="7" y1="20" x2="17" y2="20" />
        </svg>
      )
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          className={className}
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      )
  }
}

export default function App() {
  // Thành phố đang được chọn
  const [selectedCityId, setSelectedCityId] = useState('hanoi')

  // State cho thanh tìm kiếm
  const [searchQuery, setSearchQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Đơn vị đo nhiệt độ: 'C' hoặc 'F'
  const [unit, setUnit] = useState('C')

  const searchContainerRef = useRef(null)

  // Thành phố hiện tại được chọn
  const currentCity = useMemo(() => {
    return (
      MOCK_CITIES.find((city) => city.id === selectedCityId) || MOCK_CITIES[0]
    )
  }, [selectedCityId])

  // Lọc danh sách thành phố từ mock data theo từ khóa tìm kiếm
  const filteredCities = useMemo(() => {
    const query = removeAccents(searchQuery.trim())
    if (!query) return MOCK_CITIES

    return MOCK_CITIES.filter((city) => {
      const cityNameClean = removeAccents(city.name)
      const countryClean = removeAccents(city.country)
      return cityNameClean.includes(query) || countryClean.includes(query)
    })
  }, [searchQuery])

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Chuyển đổi nhiệt độ theo đơn vị
  const formatTemp = (celsius) => {
    if (unit === 'F') {
      const fahrenheit = Math.round((celsius * 9) / 5 + 32)
      return `${fahrenheit}°F`
    }
    return `${celsius}°C`
  }

  // Chọn thành phố từ dropdown hoặc chip
  const handleSelectCity = (cityId) => {
    setSelectedCityId(cityId)
    setIsDropdownOpen(false)
    setSearchQuery('')
  }

  // Class gradient theo tình trạng thời tiết
  const getHeroThemeClass = (condition) => {
    switch (condition) {
      case 'sunny':
        return styles.heroSunny
      case 'partly-cloudy':
      case 'cloudy':
        return styles.heroCloudy
      case 'rainy':
        return styles.heroRainy
      case 'thunderstorm':
        return styles.heroThunderstorm
      default:
        return ''
    }
  }

  return (
    <div className={styles.dashboard}>
      {/* Header & Thanh tìm kiếm */}
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.logoGroup}>
            <div className={styles.logoIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a5 5 0 1 1 1-9.9 4 4 0 0 1 7.5 1.9 3.5 3.5 0 0 1 0 8z" />
              </svg>
            </div>
            <div>
              <h1 className={styles.appName}>Weather Dashboard</h1>
              <p className={styles.appSubtitle}>Dự báo thời tiết 5 ngày & dữ liệu chi tiết</p>
            </div>
          </div>

          {/* Nút chuyển đổi đơn vị °C / °F */}
          <div className={styles.unitToggle} role="group" aria-label="Chọn đơn vị nhiệt độ">
            <button
              type="button"
              className={`${styles.unitBtn} ${unit === 'C' ? styles.unitBtnActive : ''}`}
              onClick={() => setUnit('C')}
            >
              °C
            </button>
            <button
              type="button"
              className={`${styles.unitBtn} ${unit === 'F' ? styles.unitBtnActive : ''}`}
              onClick={() => setUnit('F')}
            >
              °F
            </button>
          </div>
        </div>

        {/* Thanh tìm kiếm có Filter Mock Data */}
        <div className={styles.searchSection} ref={searchContainerRef}>
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Tìm kiếm thành phố (ví dụ: Hà Nội, TP. Hồ Chí Minh, Tokyo, Paris...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setIsDropdownOpen(true)
              }}
              onFocus={() => setIsDropdownOpen(true)}
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery('')}
                aria-label="Xóa tìm kiếm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Danh sách gợi ý tìm kiếm lọc từ Mock Data */}
          {isDropdownOpen && (
            <ul className={styles.dropdown} role="listbox">
              {filteredCities.length > 0 ? (
                filteredCities.map((city) => (
                  <li
                    key={city.id}
                    role="option"
                    aria-selected={city.id === selectedCityId}
                    className={`${styles.dropdownItem} ${
                      city.id === selectedCityId ? styles.dropdownItemActive : ''
                    }`}
                    onClick={() => handleSelectCity(city.id)}
                  >
                    <div className={styles.dropdownCityInfo}>
                      <span className={styles.dropdownCityName}>{city.name}</span>
                      <span className={styles.dropdownCountry}>
                        {city.country} • {city.region}
                      </span>
                    </div>
                    <div className={styles.dropdownTemp}>
                      <WeatherIcon condition={city.current.condition} size={20} />
                      <span>{formatTemp(city.current.temp)}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li className={styles.noResults}>
                  Không tìm thấy thành phố nào khớp với "<strong>{searchQuery}</strong>"
                </li>
              )}
            </ul>
          )}
        </div>

        {/* Các chip thành phố truy cập nhanh */}
        <nav className={styles.quickCities} aria-label="Thành phố phổ biến">
          {MOCK_CITIES.map((city) => (
            <button
              key={city.id}
              type="button"
              className={`${styles.cityChip} ${
                city.id === selectedCityId ? styles.cityChipActive : ''
              }`}
              onClick={() => handleSelectCity(city.id)}
            >
              {city.name}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero Card: Thời tiết hiện tại */}
      <section
        className={`${styles.heroCard} ${getHeroThemeClass(
          currentCity.current.condition
        )}`}
      >
        <div className={styles.heroLeft}>
          <div className={styles.locationBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              {currentCity.name}, {currentCity.country}
            </span>
          </div>
          <h2 className={styles.cityName}>{currentCity.name}</h2>
          <div className={styles.tempDisplay}>
            {formatTemp(currentCity.current.temp)}
          </div>
          <p className={styles.conditionText}>{currentCity.current.conditionText}</p>
          <div className={styles.tempRange}>
            <span>Cảm giác như: {formatTemp(currentCity.current.feelsLike)}</span>
            <span>•</span>
            <span>
              H: {formatTemp(currentCity.forecast[0].tempMax)} / L:{' '}
              {formatTemp(currentCity.forecast[0].tempMin)}
            </span>
          </div>
        </div>

        <div className={styles.heroRight}>
          <WeatherIcon
            condition={currentCity.current.condition}
            size={110}
            className={styles.heroIconLarge}
          />
        </div>
      </section>

      {/* Lưới thông số chi tiết (Độ ẩm, Gió, UV, AQI, Áp suất...) */}
      <section className={styles.metricsGrid} aria-label="Chỉ số thời tiết">
        {/* Độ ẩm */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            <span>Độ ẩm</span>
          </div>
          <div className={styles.metricValue}>{currentCity.current.humidity}%</div>
          <div className={styles.metricSubtext}>Điểm sương thích hợp</div>
        </div>

        {/* Tốc độ gió */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
            </svg>
            <span>Tốc độ gió</span>
          </div>
          <div className={styles.metricValue}>
            {currentCity.current.windSpeed} km/h
          </div>
          <div className={styles.metricSubtext}>Gió nhẹ theo hướng Nam</div>
        </div>

        {/* Chỉ số UV */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
            </svg>
            <span>Chỉ số UV</span>
          </div>
          <div className={styles.metricValue}>
            {currentCity.current.uvIndex} ({currentCity.current.uvText})
          </div>
          <div className={styles.metricSubtext}>Nên dùng kem chống nắng</div>
        </div>

        {/* Tầm nhìn & Áp suất */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Tầm nhìn</span>
          </div>
          <div className={styles.metricValue}>
            {currentCity.current.visibility} km
          </div>
          <div className={styles.metricSubtext}>
            Áp suất: {currentCity.current.pressure} hPa
          </div>
        </div>
      </section>

      {/* Dự báo thời tiết theo giờ */}
      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Dự báo theo giờ
          </h3>
        </div>

        <div className={styles.hourlyScroll}>
          {currentCity.hourly.map((hour, idx) => (
            <div key={idx} className={styles.hourlyItem}>
              <span className={styles.hourlyTime}>{hour.time}</span>
              <WeatherIcon condition={hour.condition} size={28} />
              <span className={styles.hourlyTemp}>{formatTemp(hour.temp)}</span>
              {hour.rainChance > 0 && (
                <span className={styles.hourlyRain}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                  {hour.rainChance}%
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DỰ BÁO THỜI TIẾT 5 NGÀY */}
      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Dự báo thời tiết 5 ngày tới
          </h3>
        </div>

        <div className={styles.forecastList}>
          {currentCity.forecast.map((day, idx) => (
            <div key={idx} className={styles.forecastRow}>
              {/* Ngày */}
              <div className={styles.forecastDayGroup}>
                <span className={styles.forecastDayName}>{day.day}</span>
                <span className={styles.forecastDate}>{day.date}</span>
              </div>

              {/* Tình trạng thời tiết & Biểu tượng */}
              <div className={styles.forecastConditionGroup}>
                <WeatherIcon condition={day.condition} size={26} />
                <span className={styles.forecastConditionText}>
                  {day.conditionText}
                </span>
              </div>

              {/* Khả năng mưa & Độ ẩm */}
              <div className={styles.forecastRainGroup}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                <span>{day.rainChance}% mưa</span>
              </div>

              {/* Nhiệt độ Min / Max kèm thanh hiển thị khoảng nhiệt */}
              <div className={styles.forecastTempGroup}>
                <span className={styles.tempMin}>{formatTemp(day.tempMin)}</span>
                <div className={styles.tempBarTrack}>
                  <div
                    className={styles.tempBarFill}
                    style={{
                      width: `${Math.min(100, Math.max(30, (day.tempMax - day.tempMin) * 10))}%`,
                    }}
                  />
                </div>
                <span className={styles.tempMax}>{formatTemp(day.tempMax)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
