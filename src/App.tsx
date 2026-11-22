import { useRef, useState, type FormEvent, type MouseEvent } from "react";
import "./invitation.css";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [rsvpSent, setRsvpSent] = useState(false);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function onPageClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const photoButton = target.closest(".hr-photo, .hr-extra-album button");
    if (!photoButton) return;
    const image = photoButton.querySelector("img");
    if (image?.src) setPhoto({ src: image.src, alt: image.alt });
  }

  function onSubmitRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRsvpSent(true);
  }

  return (
    <>
      <div className="hr-page" onClick={onPageClick}>
        <h1 className="sr-only">Ngọc Hiếu & Lan Anh</h1>
        <div className="hr-shell">
          <div
            className="hdn-reference"
            data-ceremony-visible="true"
            data-show-map="true"
            data-embed-map="true"
          >
            <div className="pageview">
              <div data-hd="w-fj4da0n4" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-yejs5w1a"
                      className="com-rectangle p-absolute"
                    >
                      <div className="rectangle-css full-mask-size mask-position full-height full-width">
                        <div className="rectangle-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-yohs1f9y"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-06dk0w07"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-9t90yjc1"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="slideInDown"
                      data-duration="5"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-lw45e01u"
                          className="com-rectangle p-absolute"
                        >
                          <div className="rectangle-css full-mask-size mask-position full-height full-width">
                            <div className="rectangle-gradient-border"></div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-hd="w-s8y2outk"
                          className="com-image-block p-absolute hr-photo"
                          aria-label="Xem ảnh"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div className="image-background p-absolute">
                              <span
                                style={{ position: "absolute", inset: "0" }}
                              >
                                <img
                                  alt="Ngọc Hiếu & Lan Anh"
                                  fetchPriority="high"
                                  loading="eager"
                                  decoding="async"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: "0",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    color: "transparent",
                                  }}
                                  src="/demo/hoa-do-nhung/reference/w-q61m13q1.webp"
                                />
                              </span>
                            </div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </button>
                        <button
                          type="button"
                          data-hd="w-xyxsg7dn"
                          className="com-image-block p-absolute hr-photo"
                          aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 2"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div className="image-background p-absolute">
                              <span
                                style={{ position: "absolute", inset: "0" }}
                              >
                                <img
                                  alt="Ngọc Hiếu và Lan Anh — ảnh 2"
                                  fetchPriority="high"
                                  loading="eager"
                                  decoding="async"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: "0",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    color: "transparent",
                                  }}
                                  src="/demo/hoa-do-nhung/reference/w-0vwiugez.webp"
                                />
                              </span>
                            </div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </button>
                        <button
                          type="button"
                          data-hd="w-dlardhx1"
                          className="com-image-block p-absolute hr-photo"
                          aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 1"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div className="image-background p-absolute">
                              <span
                                style={{ position: "absolute", inset: "0" }}
                              >
                                <img
                                  alt="Ngọc Hiếu và Lan Anh — ảnh 1"
                                  fetchPriority="high"
                                  loading="eager"
                                  decoding="async"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: "0",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    color: "transparent",
                                  }}
                                  src="/demo/hoa-do-nhung/reference/w-nqqdc52g.webp"
                                />
                              </span>
                            </div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* First block */}
                    <div
                      data-hd="w-k6jcv20g"
                      className="com-text-block p-absolute"
                      data-motion="fadeInDown"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          <em>
                            <u>Ngọc Hiếu & Lan Anh</u>
                          </em>
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-0nt2objp"
                      className="com-text-block p-absolute"
                      data-motion="fadeInDown"
                      data-duration="4"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Thư Mời Cưới
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-ow7uuduh"
                      className="com-html-box p-absolute"
                    >
                      <div className="frame-html-box full-width full-height">
                        <div className="wc-bg-image"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-v6emijd1"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-vzi42th0"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-d4nnk4qn"
                          className="com-rectangle p-absolute"
                        >
                          <div className="rectangle-css full-mask-size mask-position full-height full-width">
                            <div className="rectangle-gradient-border"></div>
                          </div>
                        </div>
                        <div
                          data-hd="w-izh1z1a2"
                          className="com-text-block p-absolute"
                          data-motion="zoomIn"
                          data-duration="3"
                        >
                          <div className="text-block">
                            <p
                              className="text-block-css full-width"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              27.12.2026
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-lnfoygwz" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-ofgbn457"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="fadeInBottomRight"
                      data-duration="3"
                    >
                      <div className="group-container">
                        <button
                          type="button"
                          data-hd="w-0vwiugez"
                          className="com-image-block p-absolute hr-photo"
                          aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 2"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div className="image-background p-absolute">
                              <span
                                style={{ position: "absolute", inset: "0" }}
                              >
                                <img
                                  alt="Ngọc Hiếu và Lan Anh — ảnh 2"
                                  loading="lazy"
                                  decoding="async"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: "0",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    color: "transparent",
                                  }}
                                  src="/images/2.webp"
                                />
                              </span>
                            </div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </button>
                        <div
                          data-hd="w-c5pwh3yw"
                          className="com-image-block p-absolute"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div
                              className="image-background p-absolute"
                              role="img"
                              aria-label=""
                            ></div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-hd="w-1st3vry8"
                      className="com-text-block p-absolute"
                      data-motion="fadeInLeft"
                      data-duration="2"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Nhà Trai
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-6pxkej02"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Phường Nhiêu Lộc, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-tp3tuqh2"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Ông Lê Thy Sơn & Bà Nguyễn Thị Thu Nguyệt
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-nc4kefia"
                      className="p-absolute"
                      data-motion="zoomIn"
                      data-duration="2"
                    >
                      <div className="full-width full-height">
                        <div className="line-css full-width">
                          <div className="line-container"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-hd="w-iv3z5ybl"
                      className="com-text-block p-absolute"
                      data-motion="fadeInLeft"
                      data-duration="2"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Nhà Gái
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-iiwdg93s"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Phường Phú Nhuận, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-ir0axqu6"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Ông Huỳnh Ngọc Các & Bà Nguyễn Thị Thu
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-188tjike"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-z5k4tbvs"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Của Con Chúng Tôi:
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-aiwg8nto"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Lễ Thành Hôn
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-hqor2rwz"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-veq7x7z0" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-ud71xliu"
                      className="com-text-block p-absolute"
                      data-motion="slideInLeft"
                      data-duration="3"
                    >
                      <div className="full-width full-height">
                        <div className="text-block">
                          <p
                            className="text-block-css full-width"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            Lê Ngọc Hiếu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-hd="w-m59pjgdy"
                      className="com-text-block p-absolute"
                      data-motion="fadeInRight"
                      data-duration="3"
                    >
                      <div className="full-width full-height">
                        <div className="text-block">
                          <p
                            className="text-block-css full-width"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            Huỳnh Ngọc Lan Anh
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-hd="w-5ecmb1zv"
                      className="com-text-block p-absolute"
                      data-motion="zoomIn"
                      data-duration="3"
                    >
                      <div className="full-width full-height">
                        <div className="text-block">
                          <p
                            className="text-block-css full-width"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            và
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-z3vw3h2x" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-nzxfyotq"
                      className="com-image-block p-absolute"
                      data-motion="fadeInRight"
                      data-duration="2"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-yqe8uiks"
                      className="com-image-block p-absolute"
                      data-motion="fadeInLeft"
                      data-duration="2"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-hfyjsypk"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="slideInUp"
                      data-duration="2.4"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-8u3ieusn"
                          className="com-image-block p-absolute"
                        >
                          <div className="full-width full-height">
                            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                              <div
                                className="image-background p-absolute"
                                role="img"
                                aria-label=""
                              ></div>
                              <div className="image-gradient-border"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-hd="w-w5w3pgqd"
                          className="com-rectangle p-absolute"
                        >
                          <div className="full-width full-height">
                            <div className="rectangle-css full-mask-size mask-position full-height full-width">
                              <div className="rectangle-gradient-border"></div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-hd="w-r4bbxklt"
                          className="com-image-block p-absolute hr-photo"
                          aria-label="Xem ảnh: Chú rể Anh Tú"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div className="image-background p-absolute">
                              <span
                                style={{ position: "absolute", inset: "0" }}
                              >
                                <img
                                  alt="Chú rể Ngọc Hiếu"
                                  loading="lazy"
                                  decoding="async"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: "0",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    color: "transparent",
                                  }}
                                  src="/images/1.webp"
                                />
                              </span>
                            </div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div
                      data-hd="w-n0i3co4k"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="slideInUp"
                      data-duration="3"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-5vz9mv54"
                          className="com-image-block p-absolute"
                        >
                          <div className="full-width full-height">
                            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                              <div
                                className="image-background p-absolute"
                                role="img"
                                aria-label=""
                              ></div>
                              <div className="image-gradient-border"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-hd="w-2ypku9gv"
                          className="com-rectangle p-absolute"
                        >
                          <div className="full-width full-height">
                            <div className="rectangle-css full-mask-size mask-position full-height full-width">
                              <div className="rectangle-gradient-border"></div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-hd="w-58emprtq"
                          className="com-image-block p-absolute hr-photo"
                          aria-label="Xem ảnh: Cô dâu Diệu Nhi"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div className="image-background p-absolute">
                              <span
                                style={{ position: "absolute", inset: "0" }}
                              >
                                <img
                                  alt="Cô dâu Lan Anh"
                                  loading="lazy"
                                  decoding="async"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: "0",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    color: "transparent",
                                  }}
                                  src="/images/6.webp"
                                />
                              </span>
                            </div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-lyeg4h12" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div data-hd="w-ui603r2x" className="p-absolute">
                      <div className="line-css full-width">
                        <div className="line-container"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-demot6p0"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Lễ Thành Hôn được cử hành tại
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-znrrvezp"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          TƯ GIA
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-0iy23m7a"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p className="text-block-css full-width">
                          Vào Lúc:
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-ze3ediao"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          7:30 - Chủ Nhật
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-apmslbcp"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          27.12.2026
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-gtjfm4f0"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          (Tức Ngày 19 Tháng 11 Năm Bính Ngọ)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-6kj1myr7" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-kji2sg1m"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-uami73ob"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Trân trọng kính mời Quý Khách đến tham dự:
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-byrhfp8f"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          TIỆC MỪNG LỄ THÀNH HÔN
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-owndk8um"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          18:00 - Chủ Nhật
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-ln5kzfdz"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          27.12.2026
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-p4akbr1r"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          (Tức Ngày 19 Tháng 11 Năm Bính Ngọ)
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-09y7uh3y"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Tại Pavilion Tân Sơn Nhất
                        </p>
                      </div>
                    </div>
                    <div
                      data-hd="w-trsif673"
                      className="com-text-block p-absolute"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="text-block">
                        <p
                          className="text-block-css full-width"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          202 Hoàng Văn Thụ, Phường Đức Nhuận, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-xhi0gyb7" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-22l073b4"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <a
                      data-hd="w-nb0c2ohe"
                      className="com-button p-absolute cursor-pointer"
                      href="https://www.google.com/maps?ll=10.79875,106.659999&z=14&t=h&hl=vi&gl=US&mapclient=embed&cid=2329531949879610843"
                      target="_blank"
                      rel="noopener noreferrer"
                      hidden
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="button-css full-height full-width">
                        <span className="button-loader"></span>
                        <div className="button-text full-width u-select-none">
                          Xem Chỉ Đường
                        </div>
                      </div>
                    </a>
                    <div
                      data-hd="w-bomiai2w"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-lwbqdz36"
                          className="com-rectangle p-absolute"
                        >
                          <div className="rectangle-css full-mask-size mask-position full-height full-width">
                            <div className="rectangle-gradient-border"></div>
                          </div>
                        </div>
                        <div
                          data-hd="w-zpy8k5cf"
                          className="com-html-box p-absolute"
                        >
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.7857806756443!2d106.66970436287556!3d10.800348397270799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b68fbc3f%3A0xc58bea5686708420!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgJiBUaeG7h2MgQ8aw4bubaSBQYXZpbGxvbiBUw6JuIFPGoW4gTmjhuqV0!5e0!3m2!1svi!2s!4v1795316056479!5m2!1svi!2s"
                            width="600"
                            height="450"
                            className="hr-map"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-d9zl7cty" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-ev4dfsq3"
                      className="com-image-block p-absolute"
                      data-motion="fadeInRight"
                      data-duration="3"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-m9n9udx7"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-4svqpugc"
                          className="com-html-box p-absolute"
                        >
                          <div
                            className="wc-cal-outer"
                            aria-label="Lịch tháng 12 năm 2026, ngày cưới là 15"
                          >
                            <div className="wc-cal-title">Tháng 12 - 2026</div>
                            <div className="wc-cal">
                              <div className="wc-cal-frame">
                                <div className="wc-cal-dow-row">
                                  <div>T2</div>
                                  <div>T3</div>
                                  <div>T4</div>
                                  <div>T5</div>
                                  <div>T6</div>
                                  <div>T7</div>
                                  <div>CN</div>
                                </div>
                                <div className="wc-cal-grid">
                                  <div className="wc-cal-empty"></div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">1</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">2</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">3</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">4</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">5</span>
                                  </div>
                                  <div className="wc-cal-day--sun ">
                                    <span className="wc-cal-day-span">6</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">7</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">8</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">9</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">10</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">11</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">12</span>
                                  </div>
                                  <div className="wc-cal-day--sun ">
                                    <span className="wc-cal-day-span">13</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">14</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">15</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">16</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">17</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">18</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">19</span>
                                  </div>
                                  <div className="wc-cal-day--sun ">
                                    <span className="wc-cal-day-span">20</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">21</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">22</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">23</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">24</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">25</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">26</span>
                                  </div>
                                  <div
                                    className=" wc-cal-day--selected"
                                    aria-current="date"
                                  >
                                    <svg
                                      className="hr-calendar-heart"
                                      viewBox="0 0 32 30"
                                      aria-hidden="true"
                                    >
                                      <path d="M16 28 3 15C-7 3 10-6 16 7 22-6 39 3 29 15Z"></path>
                                    </svg>
                                    <span className="wc-cal-day-span">27</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">28</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">29</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">30</span>
                                  </div>
                                  <div className=" ">
                                    <span className="wc-cal-day-span">31</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-hd="w-spoaqqil"
                          className="com-rectangle p-absolute"
                        >
                          <div className="rectangle-css full-mask-size mask-position full-height full-width">
                            <div className="rectangle-gradient-border"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-g1qbffbt" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-0de0wxol"
                      className="com-image-block p-absolute"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div
                          className="image-background p-absolute"
                          role="img"
                          aria-label=""
                        ></div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </div>
                    <div
                      data-hd="w-mem16gzf"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="fadeInUp"
                      data-duration="3"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-g1on2txo"
                          className="com-image-block p-absolute"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div
                              className="image-background p-absolute"
                              role="img"
                              aria-label=""
                            ></div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </div>
                        <div
                          data-hd="w-el93jq3s"
                          className="com-text-block p-absolute"
                          data-motion="zoomIn"
                          data-duration="3"
                        >
                          <div className="text-block">
                            <p className="text-block-css full-width">
                              Xác Nhận Tham Dự
                            </p>
                          </div>
                        </div>
                        <div
                          data-hd="w-la35i9ih"
                          className="p-absolute"
                          data-motion="zoomIn"
                          data-duration="3"
                        >
                          <div className="line-css full-width">
                            <div className="line-container"></div>
                          </div>
                        </div>
                        <div
                          data-hd="w-ba8t318b"
                          className="p-absolute group-auto-scroll sroll-size"
                        >
                          <div className="group-container">
                            <div
                              data-hd="w-wdvo1bwl"
                              className="com-rectangle p-absolute"
                            >
                              <div className="rectangle-css full-mask-size mask-position full-height full-width">
                                <div className="rectangle-gradient-border"></div>
                              </div>
                            </div>
                            <div data-hd="w-i4k8q2md" className="p-absolute">
                              <form
                                className="full-width full-height"
                                aria-label="Xác nhận tham dự"
                                onSubmit={onSubmitRsvp}
                              >
                                <input
                                  type="hidden"
                                  name="publicSlug"
                                  value="anh-tu-dieu-nhi-zv7j"
                                />
                                <div
                                  data-hd="w-aei6ku3p"
                                  className="p-absolute"
                                >
                                  <div className="input-css full-width full-height">
                                    <input
                                      className="full-width full-height"
                                      aria-label="Tên của bạn"
                                      placeholder="Tên của bạn là?"
                                      autoComplete="name"
                                      minLength={2}
                                      maxLength={80}
                                      required
                                      name="guestName"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-hd="w-falxo8eo"
                                  className="p-absolute"
                                >
                                  <div className="input-css full-width full-height">
                                    <input
                                      className="full-width full-height"
                                      aria-label="Bạn là gì của Dâu Rể nhỉ?"
                                      placeholder="Bạn là gì của Dâu Rể nhỉ?"
                                      maxLength={120}
                                      name="relationship"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-hd="w-wwnpgcpd"
                                  className="p-absolute"
                                >
                                  <div className="input-css full-width full-height">
                                    <input
                                      className="full-width full-height"
                                      aria-label="Gửi lời chúc đến Dâu Rể nhé!"
                                      placeholder="Gửi lời chúc đến Dâu Rể nhé!"
                                      maxLength={350}
                                      name="message"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-hd="w-3pmym5fr"
                                  className="p-absolute"
                                >
                                  <div className="select-css full-width full-height">
                                    <select
                                      className="full-width full-height"
                                      name="attending"
                                      aria-label="Bạn có tham dự không?"
                                      required
                                      defaultValue=""
                                    >
                                      <option value="" disabled>
                                        Bạn Có Tham Dự Không?
                                      </option>
                                      <option value="yes">
                                        Có Thể Tham Dự
                                      </option>
                                      <option value="no">
                                        Không Thể Tham Dự
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <button
                                  data-hd="w-f5msnbss"
                                  className="com-button p-absolute hr-submit"
                                  type="submit"
                                >
                                  <span className="button-css full-height full-width">
                                    <span className="button-text full-width u-select-none">
                                      Gửi xác nhận và lời chúc
                                    </span>
                                  </span>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-hd="w-akq1hp3b" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <button
                      type="button"
                      data-hd="w-nqqdc52g"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 1"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 1"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/2.webp"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                    <button
                      type="button"
                      data-hd="w-8ea7cm3t"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 2"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 2"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/3.jpg"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div data-hd="w-u142c3qv" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <button
                      type="button"
                      data-hd="w-q61m13q1"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 3"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 3"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/5.jpg"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                    <button
                      type="button"
                      data-hd="w-5clwmj41"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 3"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 3"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/15.jpg"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                    <button
                      type="button"
                      data-hd="w-zb99fbrh"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 5"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 5"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/7.jpg"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div data-hd="w-992t5t0q" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <button
                      type="button"
                      data-hd="w-24zrhaaq"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 6"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 6"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/12.jpg"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                    <button
                      type="button"
                      data-hd="w-bqle08a8"
                      className="com-image-block p-absolute hr-photo"
                      aria-label="Xem ảnh: Ngọc Hiếu và Lan Anh — ảnh 7"
                    >
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute">
                          <span style={{ position: "absolute", inset: "0" }}>
                            <img
                              alt="Ngọc Hiếu và Lan Anh — ảnh 7"
                              loading="lazy"
                              decoding="async"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                objectFit: "cover",
                                objectPosition: "center",
                                color: "transparent",
                              }}
                              src="/images/9.jpg"
                            />
                          </span>
                        </div>
                        <div className="image-gradient-border"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hr-extra-album">
                <button type="button" aria-label="Xem ảnh thêm 1">
                  <span style={{ position: "absolute", inset: "0" }}>
                    <img
                      alt="Ngọc Hiếu và Lan Anh — ảnh 8"
                      loading="lazy"
                      decoding="async"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        objectFit: "cover",
                        objectPosition: "center",
                        color: "transparent",
                      }}
                      src="/images/10.jpg"
                    />
                  </span>
                </button>
                <button type="button" aria-label="Xem ảnh thêm 2">
                  <span style={{ position: "absolute", inset: "0" }}>
                    <img
                      alt="Ngọc Hiếu và Lan Anh — ảnh 9"
                      loading="lazy"
                      decoding="async"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        objectFit: "cover",
                        objectPosition: "center",
                        color: "transparent",
                      }}
                      src="/images/11.jpg"
                    />
                  </span>
                </button>
                {/* <button type="button" aria-label="Xem ảnh thêm 3">
                  <span style={{ position: "absolute", inset: "0" }}>
                    <img
                      alt="Ngọc Hiếu và Lan Anh — ảnh 10"
                      loading="lazy"
                      decoding="async"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        objectFit: "cover",
                        objectPosition: "center",
                        color: "transparent",
                      }}
                      src="/demo/hoa-do-nhung/reference/w-40oxcrfo.jpg"
                    />
                  </span>
                </button> */}
              </div>
              <button type="button" aria-label="Xem ảnh thêm 3">
                    <img
                      alt="Ngọc Hiếu và Lan Anh — ảnh 10"
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src="/images/14.webp"
                    />
                </button>
              <div>

              </div>
              {/* --- Opened Envelope Section --- */}
              <div data-hd="w-3dpujxky" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-06nsx1am"
                      className="p-absolute group-auto-scroll sroll-size"
                      data-motion="fadeInUp"
                      data-duration="2"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-wpl2sckx"
                          className="com-image-block p-absolute"
                        >
                          <div className="full-width full-height">
                            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                              <div
                                className="image-background p-absolute"
                                role="img"
                                aria-label=""
                              ></div>
                              <div className="image-gradient-border"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-hd="w-1539h6kt"
                          className="com-image-block p-absolute"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div
                              className="image-background p-absolute"
                              role="img"
                              aria-label=""
                            ></div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </div>
                        <div
                          data-hd="w-7zpkxtv3"
                          className="com-image-block p-absolute"
                        >
                          <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                            <div
                              className="image-background p-absolute"
                              role="img"
                              aria-label=""
                            ></div>
                            <div className="image-gradient-border"></div>
                          </div>
                        </div>
                        <div
                          data-hd="w-a3c3pjnf"
                          className="com-text-block p-absolute"
                        >
                          <div className="full-width full-height">
                            <div className="text-block">
                              <p
                                className="text-block-css full-width mt-10!"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                Ngọc Hiếu & Lan Anh
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                data-hd="w-p24fqwzb"
                className="hr-thankyou-note"
                data-motion=""
              >
                Rất hân hạnh được đón tiếp! Trân trọng kính mời!
              </p>
              <div data-hd="w-t5d52bo9" className="com-section" data-section="">
                <div className="section-wrapper full-width full-height p-relative">
                  <div className="section-background p-absolute full-width full-height"></div>
                  <div className="section-container full-height p-relative">
                    <div
                      data-hd="w-tmk3m08e"
                      className="p-absolute group-auto-scroll sroll-size"
                    >
                      <div className="group-container">
                        <div
                          data-hd="w-c94z0ysk"
                          className="com-text-block p-absolute"
                        >
                          <div className="text-block">
                            <p
                              className="text-block-css full-width"
                              style={{ whiteSpace: "pre-line" }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- Audio --- */}
        <audio
          ref={audioRef}
          src="/templates/hoa-do-nhung/reference/music.mp3"
          loop
          preload="none"
        ></audio>
        {/* --- Music Button --- */}
        <button
          type="button"
          className="hr-music"
          aria-pressed={playing}
          aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
          title={playing ? "Tắt nhạc" : "Bật nhạc"}
          onClick={toggleMusic}
        >
          <img
            alt=""
            loading="lazy"
            width="44"
            height="44"
            decoding="async"
            style={{ color: "transparent" }}
            src="/templates/hoa-do-nhung/reference/play.png"
          />
        </button>
      </div>
      {/* --- Photo Lightbox --- */}
      {photo ? (
        <button
          type="button"
          className="invite-lightbox"
          onClick={() => setPhoto(null)}
          aria-label="Đóng ảnh"
        >
          <img src={photo.src} alt={photo.alt} />
        </button>
      ) : null}
      {rsvpSent ? (
        <div className="invite-toast" role="status">
          Đã gửi xác nhận. Cảm ơn bạn!
        </div>
      ) : null}
    </>
  );
}
